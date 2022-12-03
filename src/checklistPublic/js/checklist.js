const fileChooser = document.querySelectorAll('.input-file')
import { getArInputs, checkboxData} from "./checklistObjects.mjs"

const brands = await fetch("https://sigdelta.com.br/vitor/api_chamado/ConsultaMarcas.php", {
    headers: {
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidXN1YXJpbyJ9.MHnjrvFumPP4TqwXkI71G7MY9N_j4tLPIT7tIU6cFXY"
    }
})

const parsedBrands = await brands.json()
let brandsList

document.getElementById("brand-datalist").innerHTML = ""

parsedBrands.forEach(i => {
    document.querySelectorAll(".brand-datalist").forEach(ii => {
        brandsList += `
        <option value="${i}">
            ${i}
        </option>
        `
    })
})

fileChooser.forEach(fileInput => {
    fileInput.addEventListener("input", showPreviewImg)
})
function getElementToPdf(ref) {
    return document.getElementById(ref)
}
async function generatePDF () { 
    const finalData = {
        headerData: {},
        arData:  [],
        instalaçãoData: {
            tubulação: {
                nome: "Tubulação cobre",
                checked: document.querySelector("input[data-container='tubulação']").checked ? "checked" : false,
                data: {
                    metros: getElementToPdf("tubulação-metros").value,
                }
            },
            dreno: {
                nome: "Dreno externo",
                checked: document.querySelector("input[data-container='dreno']").checked ? "checked" : false,
                data: {
                    tipo: getElementToPdf("dreno-tipo")?.value ? getElementToPdf("dreno-tipo").value : "",
                    quantidade: getElementToPdf("dreno-quantidade")?.value? getElementToPdf("dreno-quantidade").value : ""
                }
            },
            canaletas: {
                nome: "Canaletas",
                checked: document.querySelector("input[data-container='canaletas']").checked ? "checked" : false,
                data: {
                    cb30_metros: getElementToPdf("CB30-METROS")?.value ? getElementToPdf("CB30-METROS").value : "",
                    cb30_terminal: getElementToPdf("CB30-TERMINAL")?.value ? getElementToPdf("CB30-TERMINAL").value: "",
                    cb30_curvas: getElementToPdf("CB30-CURVAS")?.value ? getElementToPdf("CB30-CURVAS").value : "",
                    cb60_metros: getElementToPdf("CB60-METROS")?.value ? getElementToPdf("CB60-METROS").value : "",
                    cb60_terminal: getElementToPdf("CB60-TERMINAL")?.value ? getElementToPdf("CB60-TERMINAL").value : "",
                    cb60_curvas: getElementToPdf("CB60-CURVAS")?.value ? getElementToPdf("CB60-CURVAS").value : "",
                    cb80_metros: getElementToPdf("CB80-METROS")?.value ? getElementToPdf("CB80-METROS").value : "",
                    cb80_terminal: getElementToPdf("CB80-TERMINAL")?.value ? getElementToPdf("CB80-TERMINAL").value : "",
                    cb80_curvas: getElementToPdf("CB80-CURVAS")?.value ? getElementToPdf("CB80-CURVAS").value : "",
                }
            },
            ponto_força: {
                nome: "Ponto de força",
                checked: document.querySelector("input[data-container='ponto_força']").checked ? "checked" : false,
                data: {
                    descr: getElementToPdf("ponto_força-descr")?.value ? getElementToPdf("ponto_força-descr").value : "",
                }
            },
        },
        alturaData: {
            escada_aluminio: {
                nome: "Escada aluminio",
                checked: document.querySelector("#escada-aluminio").checked ? "checked" : false,
            },
            escada_laranja: {
                nome: "Escada laranja",
                checked: document.querySelector("#escada-laranja").checked ? "checked" : false,
            },
            andaimes: {
                nome: "Andaimes",
                checked: document.querySelector("#andaimes").checked ? "checked" : false,
            },
            rapel: {
                nome: "Rapel",
                checked: document.querySelector("#rapel").checked ? "checked" : false,
            },
        },
        imgsData: []
    }

    finalData.headerData = {
        numero_serviço: getElementToPdf("numero-serviço").value,
        data_visita: getElementToPdf("data-visita").value,
        numero_tecnico: getElementToPdf("numero-tecnico").value,
        nome_tecnico: getElementToPdf("nome-tecnico").value,
        quantidade_ar: getElementToPdf("quantidade-ar").value,
    }

    let arId = 1
    document.querySelectorAll(".ar-container-identfier").forEach(ar => { // ars
        const d ={
            id: arId,
            marca: ar.querySelector("#marca").value,
            btus: ar.querySelector("#btus").value,
            compressor : ar.querySelector("#compressor").value,
            condensador: ar.querySelector("#condensador").value,
        } 
        finalData.arData.push(d)
        arId++
    })

    const imgs = document.querySelectorAll(".input-file") // imgsi nput[type='file']
    const formData = new FormData();
    imgs.forEach(imgInput => {
        if (imgInput.files[0]) {
            formData.append('file', imgInput.files[0]);
        }
    });

    formData.append(
        "data", JSON.stringify(finalData)
        );
// "{\"id\": 1, \"title\": \"title1\", \"description\": \"string\",\"media_type\": \"image/gif/video/external_video\",\"media_url\": \"string\",\"upload_origin\": \"news\"}"
    const options = {
      method: 'POST',
      body: formData
    };
    
    let pass = true
    let hasEmptyError = false
    document.querySelectorAll("input").forEach(i => {
        if (i.value === "" && i.getAttribute("type") !== "file" && hasEmptyError === false) {
            hasEmptyError = true
            pass = false
            let iName =  i.getAttribute("id")
            console.log(i)
            i.focus()
            i.style.borderBottomColor = "red"
            i.style.animation = " shake 0.82s cubic-bezier(.36,.07,.19,.97) both"
            i.style.translate = " translate3d(0, 0, 0)"
            setTimeout(() => {
                i.style.borderBottomColor = "white"
                i.style.animation = "y"
            }, 1000)
        }
    })

    document.querySelectorAll("select").forEach(i => {
        if (i.value === "" && hasEmptyError === false) {
            hasEmptyError = true
            pass = false
            let iName =  i.getAttribute("id")
            console.log(i)
            i.focus()
            i.style.borderBottomColor = "red"
            i.style.animation = " shake 0.82s cubic-bezier(.36,.07,.19,.97) both"
            i.style.translate = " translate3d(0, 0, 0)"
            setTimeout(() => {
                i.style.borderBottomColor = "white"
                i.style.animation = "y"
            }, 1000)
        }
    })
    document.querySelectorAll("textarea").forEach(i => {
        if (i.value === "" && hasEmptyError === false) {
            hasEmptyError = true
            pass = false
            let iName =  i.getAttribute("id")
            console.log(i)
            i.focus()
            i.style.borderBottomColor = "red"
            i.style.animation = " shake 0.82s cubic-bezier(.36,.07,.19,.97) both"
            i.style.translate = " translate3d(0, 0, 0)"
            setTimeout(() => {
                i.style.borderBottomColor = "white"
                i.style.animation = "yyy"
            }, 1000)
        }
    })
    
    if (pass !== true) {
        console.log(pass)
        return
    }

    const response = await fetch('/generate-pdf', options)
    const parsedResponse = await response.json()
    if (parsedResponse.sucess) {
        alert(" Registro De Atendimento Salvo! ")
    }else {
        alert(" Houve Um Erro Ao salvar Registro De Atendimento")
    }
}
document.getElementById("fn-btn-id").addEventListener("click", generatePDF)

const quantidadeInput = document.getElementById("quantidade-ar")
const aparelhosContainer = document.getElementById("aparelhos-container")
quantidadeInput.addEventListener("input", setQuantityToShow)

function showPreviewImg (e) {
    const previewImg = document.getElementById(e.target.dataset.img);
    console.log(`container-${e.target.dataset.img}`)
    const containerPeviewImg = document.getElementById(`container-${e.target.dataset.img}`)
    const selecionarSpan = document.getElementById(e.target.dataset.selecionar);
    
    const fileToUpload = e.target.files.item(0);
    const reader = new FileReader();
    reader.onload = e => previewImg.src = e.target.result;
    reader.readAsDataURL(fileToUpload);

    previewImg.style.height = "150px"
    containerPeviewImg.style.height="auto"
    selecionarSpan.innerHTML = "Clique para trocar a imagem"
    document.querySelectorAll('.input-file').forEach(fileInput => {
        if (fileInput.value === "") {
            console.log(fileInput.dataset.img)
            const previewImg = document.getElementById("container-"+fileInput.dataset.img);
            previewImg.style.height = "70px"
        }
    })
}

function setQuantityToShow () {
    aparelhosContainer.innerHTML = ""
    for (let i = 0; i < quantidadeInput.value && i < 20; i++) {
        aparelhosContainer.innerHTML += getArInputs(i)
        document.querySelectorAll(".brand-datalist").forEach(ii => {
            ii.innerHTML += brandsList
    })
    }

    if (quantidadeInput.value === "") {
        aparelhosContainer.innerHTML += getArInputs(0)
            document.querySelectorAll(".brand-datalist").forEach(ii => {
                ii.innerHTML += brandsList
        })
    }
}

function getNowDatetime()
{
    var myField = document.getElementById("data-visita");
    var now = new Date();
    myField.valueAsNumber = now.getTime() - now.getTimezoneOffset() * 60000;
}

getNowDatetime()

document.querySelectorAll(".action-cehckbox").forEach(e => {
    e.addEventListener("input", showOptionsGridContaienrs)
})
function showOptionsGridContaienrs (e) {
    if (e.target.dataset.container !== "tubulação") {
        if (e.target.checked === true) {
            document.getElementById(`${e.target.dataset.container}-container`).style.display = "flex"
            document.getElementById(`${e.target.dataset.container}-container`).innerHTML = checkboxData[e.target.dataset.container]
        }else {
            document.getElementById(`${e.target.dataset.container}-container`).style.display = "none"
            document.getElementById(`${e.target.dataset.container}-container`).innerHTML = ""
        }
    }else {
        if (e.target.checked === true) {
            document.getElementById(`${e.target.dataset.container}-container`).innerHTML = `
            <h3 class="grid-title">Tubulação cobre</h3>
            <section class="grid-section">
              <label for="">Quantos metros de fio precisa?</label>
              <input type="number" name="" id="tubulação-metros" placeholder="Metros">
            </section>
            `
        }else {
            document.getElementById(`${e.target.dataset.container}-container`).innerHTML = `
                <h3 class="grid-title">Tubulação cobre</h3>
                <section class="grid-section">
                <label for="">Quantos metros de tububulação precisa?</label>
                <input type="number" name="" id="tubulação-metros" placeholder="Metros">
                </section>
            `
        }
    }
  
}