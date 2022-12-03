const express = require("express")
const http = require("http")
const cors =require("cors")
const dotenv =require("dotenv")
const path = require("path")
const app = express()
const server = http.createServer(app)
const router = require("express").Router()
const fs = require("fs")
const log4js = require('log4js')
dotenv.config()

log4js.configure({
  appenders: { everything: { type: 'file', filename: 'logs.log' } },
  categories: { default: { appenders: ['everything'], level: 'ALL' } }
});
const logger = log4js.getLogger();

// const pdf = require("jspdf")
// const htmlPDF = require("html-pdf")
const options = require("./src/utils/config.js")
const multer = require("./src/middlewares/multer.js").uploadMiddlware
const ejs = require("ejs")

app.use(cors())
app.set('view engine', 'html');
app.use(express.static(path.resolve("src", "public")))
app.use(express.static(path.resolve("src", "checklistPublic")))

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true}));

router.get("/ping", (req, res) => {
    res.send("pong")
})

router.get("/consulta", (req, res) => {
    res.sendFile(path.resolve("src", "public", "consulta.html"))
})
router.get("/", (req, res) => {
    res.sendFile(path.resolve("src", "public", "index.html"))
})
router.get("/agendamentos", (req, res) => {
    const {offset, limit} = req.query
    const fileContent = fs.readFileSync(path.resolve("src", "db", "db.json"))
    const parsedFile = JSON.parse(fileContent)
    res.json(parsedFile.slice(offset, limit))
})
router.post("/agendamentos", (req, res) => {
    const fileContent = fs.readFileSync(path.resolve("src", "db", "db.json"))
    const idContent = fs.readFileSync(path.resolve("src", "db", "id.json"))

    const parsedId = JSON.parse(idContent)
    const parsedFile = JSON.parse(fileContent)

    req.body.id = parsedId.id
    Object.assign(req.body, {hour: new Date().toLocaleDateString("af-ZA").replaceAll("/", "-")+"/"+new Date().getHours()}) 

    parsedFile.push({...req.body})
    fs.writeFileSync(path.resolve("src", "db", "db.json"), JSON.stringify(parsedFile, null, 4))

    parsedId.id = parsedId.id +1
    fs.writeFileSync(path.resolve("src", "db", "id.json"), JSON.stringify(parsedId))

})

router.get("/agendamentos/:id", (req, res) => {
    const {offset, limit} = req.query
    const { id } = req.params
    const fileContent = fs.readFileSync(path.resolve("src", "db", "db.json"))
    const parsedFile = JSON.parse(fileContent)
    const filtredParsedFile = parsedFile.filter(e => e.id == id)
    console.log(filtredParsedFile)
    res.json(filtredParsedFile[0])
})

router.get("/checklist", (req, res) => {
   res.sendFile(path.resolve("src", "checklistPublic", "html","checklist.html"))
})
router.get("/checklist/consulta", (req, res) => {
  res.sendFile(path.resolve("src", "checklistPublic", "html","checklistConsulta.html"))
})
router.get("/pdfs", (req, res) => {
    const {offset, limit} = req.query
    const fileContent = fs.readFileSync(path.resolve("src", "pdfs", "db", "db.json"))
    const parsedFile = JSON.parse(fileContent)
    res.json(parsedFile.slice(offset, limit))
})
router.get("/pdfs/:id", (req, res) => {
    const { id } = req.params
    const fileContent = fs.readFileSync(path.resolve("src" ,"pdfs", "db", "db.json"))
    const parsedFile = JSON.parse(fileContent)
    const filtredParsedFile = parsedFile.filter(e => e.numero_serviço == id)
    res.json(filtredParsedFile[0])
})
router.get("/get-pdf/:pdf", (req, res) => {
    const pdf = req.params.pdf
    console.log(pdf)
    const data = fs.readFileSync(path.resolve("src", "checklistPublic", "pdfs", pdf), {encoding: "utf-8"})
    res.json({data: data.toString()})
})
router.post("/generate-pdf", multer.array("file", 5), async (req, res) => {
    try {
        const { data } = req.body
    const parsedData = JSON.parse(data)
    
    const imgArray = req.files.map(({path}) => {
        return path
    })
    const imgsArrayToShow = imgArray.map(imgPath => {
        return "https://agendamento.vitorsolucoes.com.br/temp/"+imgPath.split("temp/")[1]
    })

    const html = await ejs.renderFile(path.resolve("src", "checklistPublic", "html","pdftemplate.ejs"), {
        headerData: parsedData.headerData,
        arData: parsedData.arData,
        instalaçãoData: parsedData.instalaçãoData,
        alturaData: parsedData.alturaData,
        checked: "checked",
        imgs: imgsArrayToShow
    })
    
    fs.writeFileSync(path.resolve("src", "checklistPublic", "pdfs", `${parsedData.headerData.numero_serviço}-${parsedData.headerData.data_visita.split(":")[0]}-${parsedData.headerData.nome_tecnico}-${parsedData.headerData.numero_tecnico}.html`),  html.toString())
    const fileContent = fs.readFileSync(path.resolve("src", "pdfs", "db", "db.json"))
    const parsedFile = JSON.parse(fileContent)
    parsedFile.push(
    {
        numero_serviço: parsedData.headerData.numero_serviço,
        data_visita: parsedData.headerData.data_visita.split(":")[0],
        nome_tecnico: parsedData.headerData.nome_tecnico,
        numero_tecnico: parsedData.headerData.numero_tecnico,
        pdf: `pdfs/${parsedData.headerData.numero_serviço}-${parsedData.headerData.data_visita.split(":")[0]}-${parsedData.headerData.nome_tecnico}-${parsedData.headerData.numero_tecnico}.html`
    }
    )
    fs.writeFileSync(path.resolve("src", "pdfs","db", "db.json"), JSON.stringify(parsedFile, null, 4))
    console.log("PDF Feito")
    res.status(200).json({status: true, sucess: true, pdf: `pdfs/${parsedData.headerData.numero_serviço}-${parsedData.headerData.data_visita.split(":")[0]}-${parsedData.headerData.nome_tecnico}-${parsedData.headerData.numero_tecnico}.html`})
    } catch (err) {
        console.log(err)
    }
})

app.use(router)

server.listen(3331,() => {
    console.log("Servidor rodando na porta: " + 3331)
})