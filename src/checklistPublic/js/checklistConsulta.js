var agendamentos
var searchFilters = {}
var showObject = {
    offset: 0,
    limit: 10,
    position: 1,
    max: 0
}
var tempFiltredAgendamentosVar

import {sendAgendamentos, getAgendamentos, getAgendamentosById} from "./checklistObjects.mjs"

async function init () {
    agendamentos = await getAgendamentos(0, 9999)
    agendamentos = agendamentos.sort((a, b) => {
        if (a.data_visita > b.data_visita) {
                      return -1;
                    }
                    if (a.data_visita < b.data_visita) {
                      return 1;
                    }
        // a must be equal to b
        return 0;
      })
      showObject.max = Math.ceil(agendamentos.length / 10)
      document.getElementById("total").innerHTML = showObject.max

      agendamentos.slice(showObject.offset,showObject.limit).forEach(element => {
        console.log(element)
        document.getElementById("results-container-id").innerHTML += `
         <tr style="background-color: rgb(58, 56, 56); color:white; height: 39px; padding: 5px;">
            <td  style="width: 20%;">${element.numero_serviço.split("-").reverse().join("/")}</td>
            <td style="width: 20%">${element.data_visita.replace("T", "_")}Hrs</td>
            <td style="width: 20%">${element.nome_tecnico}</td>
            <td style="width: 20%"><button value="${element.numero_serviço}" class="result-btn">Baixar PDF</button></td>
        </tr>
        `
    })
    
    document.querySelectorAll(".result-btn").forEach(btn => {
        btn.addEventListener("click",(e) => handleSelected(e))
    })

    let modal = document.getElementById("myModal");
    let span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none"
      document.getElementById("infos-container-id").innerHTML = ""
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none"
      document.getElementById("infos-container-id").innerHTML = ""
      }
    }

    document.getElementById("clean-btn").addEventListener("click", () => {
        showObject.offset = 0
        showObject.limit = 10
        document.querySelectorAll("input").forEach(input => {
            input.value = ""
        });
        searchFilters = {}
        document.getElementById("title-description-id").innerHTML = "Descrição Da Pesquisa"
        document.getElementById("results-container-id").innerHTML = `
        <tr style="background-color: black; color:white; height: 35px">
        <th style="width: 20%">Numero Ordem</th>
        <th style="width: 20%">Data Visita</th>
        <th style="width: 20%">Tecnico Nome</th>
        <th style="width: 20%">Baixar PDF</th>
        </tr>
        `
        agendamentos.slice(showObject.offset,showObject.limit).forEach(element => {
            document.getElementById("results-container-id").innerHTML += `
              <tr style="background-color: rgb(58, 56, 56); color:white; height: 39px; padding: 5px;">
            <td  style="width: 20%;">${element.numero_serviço.split("-").reverse().join("/")}</td>
            <td style="width: 20%">${element.data_visita.replace("T", "_")}Hrs</td>
            <td style="width: 20%">${element.nome_tecnico}</td>
            <td style="width: 20%"><button value="${element.numero_serviço}" class="result-btn">Baixar PDF</button></td>
        </tr>
            ` 
        })
        document.querySelectorAll(".result-btn").forEach(btn => {
            btn.addEventListener("click", () => handleSelected(e))
        })
    })
    
    
    document.getElementById("search-btn").addEventListener("click", handleSearchFilters)
}
init()

async function handleSelected (e) {
  const response = await getAgendamentosById(e.target.value)
    const y = await fetch(`/get-pdf/${response.pdf.split("pdfs/")[1]}`, {
          method: "GET",
        })
    const yy = await y.json()
    var opt = {
      margin:       [0.1, 0.7],
    filename:     response.pdf.split("pdfs/")[1].split(".html")[0]+".pdf",
    // image:        {quality: 0.98},
    html2canvas:  { scale: 2 },
    jsPDF: {unit: 'in', format: "A3", orientation: "portrait", border: "8mm", }
  }

// New Promise-based usage:
 await html2pdf().set(opt).from(yy.data).save();

// // Old monolithic-style usage:
// await  html2pdf(yy.data, opt);
}

function showselectedInfo (data) {
    Object.keys(data).forEach((item) => {
        if (item === "nome") {
            return
        }
        if (item === "numero") {
            return
        }
        if (item === "equipamento") {
            return
        }

    document.getElementById("infos-container-id").innerHTML += `
    <section>
    <label for="">
        <strong>  ${item}:  </strong>
    </label>
    <span>
         ${data[item]}
    </span>
   </section>
    `
      });
      
    
}

function handleSearchFilters () {
    let tempFiltredAgendamentos = agendamentos
    tempFiltredAgendamentosVar = tempFiltredAgendamentos
    if (Object.keys(searchFilters).length < 1) {
        document.getElementById("results-container-id").innerHTML = `
        <tr style="background-color: black; color:white; height: 35px">
        <th style="width: 20%">Numero Ordem</th>
        <th style="width: 20%">Data Visita</th>
        <th style="width: 20%">Tecnico Nome</th>
        <th style="width: 20%">Baixar PDF</th>
        </tr>
        `
        tempFiltredAgendamentos.slice(showObject.offset,showObject.limit).forEach(element => {
            document.getElementById("results-container-id").innerHTML += `
            <tr style="background-color: rgb(58, 56, 56); color:white; height: 39px; padding: 5px;">
            <td  style="width: 20%;">${element.numero_serviço.split("-").reverse().join("/")}</td>
            <td style="width: 20%">${element.data_visita.replace("T", "_")}Hrs</td>
            <td style="width: 20%">${element.nome_tecnico}</td>
            <td style="width: 20%"><button value="${element.numero_serviço}" class="result-btn">Baixar PDF</button></td>
        </tr>
            `
        })    
        tempFiltredAgendamentosVar = tempFiltredAgendamentos
        document.querySelectorAll(".result-btn").forEach(btn => {
            btn.addEventListener("click",(e) => handleSelected(e))
        })
        return
    }
    let descriptionObjects = []
    Object.keys(searchFilters).forEach(filtro => {

        if (filtro === "tempo") {
            if (searchFilters[filtro] === "recente") {
                descriptionObjects.push("Mais Recente")
                tempFiltredAgendamentos = tempFiltredAgendamentos.sort((a, b) => {
                    if (a.data_visita > b.data_visita) {
                      return -1;
                    }
                    if (a.data_visita < b.data_visita) {
                      return 1;
                    }
                    // a must be equal to b
                    return 0;
                  })
            }else {
                descriptionObjects.push("Mais Antigo")
                tempFiltredAgendamentos = tempFiltredAgendamentos.sort((a, b) => {
                    if (a.data_visita > b.data_visita) {
                      return 1;
                    }
                    if (a.data_visita < b.data_visita) {
                      return -1;
                    }
                    // a must be equal to b
                    return 0;
                  })
            }
           
              document.getElementById("results-container-id").innerHTML = `
              <tr style="background-color: black; color:white; height: 35px">
              <th style="width: 20%">Numero Ordem</th>
              <th style="width: 20%">Data Visita</th>
              <th style="width: 20%">Tecnico Nome</th>
              <th style="width: 20%">Baixar PDF</th>
              </tr>
              `
              tempFiltredAgendamentos.slice(showObject.offset,showObject.limit).forEach(element => {
                console.log(element.data_visita)
                  document.getElementById("results-container-id").innerHTML += `
                  <tr style="background-color: rgb(58, 56, 56); color:white; height: 39px; padding: 5px;">
                  <td  style="width: 20%;">${element.numero_serviço.split("-").reverse().join("/")}</td>
                  <td style="width: 20%">${element.data_visita.replace("T", "_")}Hrs</td>
                  <td style="width: 20%">${element.nome_tecnico}</td>
                  <td style="width: 20%"><button value="${element.numero_serviço}" class="result-btn">Baixar PDF</button></td>
              </tr>
                  `})
                  tempFiltredAgendamentosVar = tempFiltredAgendamentos
                  document.querySelectorAll(".result-btn").forEach(btn => {
                    btn.addEventListener("click",(e) => handleSelected(e))
                })
                  document.getElementById("title-description-id").innerHTML = `Pesquisa Atual: `
                  descriptionObjects.forEach(i => {
                    document.getElementById("title-description-id").innerHTML += " " + i + " |"
                  })
                  return
        }
        descriptionObjects.push(filtro + ": "+ searchFilters[filtro])
        console.log(filtro)
        tempFiltredAgendamentos = tempFiltredAgendamentos.filter(agendamento => agendamento[filtro].includes(searchFilters[filtro]))
        tempFiltredAgendamentosVar = tempFiltredAgendamentos
       // tempFiltredAgendamentos = tempFiltredAgendamentos.filter(agendamento => agendamento[filtro] === searchFilters[filtro].replaceAll("/", "-"))
        if (tempFiltredAgendamentos.length < 1) {
            alert("Sem resultados para esta pesquisa!")
        }
        document.getElementById("results-container-id").innerHTML = `
        <tr style="background-color: black; color:white; height: 35px">
        <th style="width: 20%">Numero Ordem</th>
        <th style="width: 20%">Data Visita</th>
        <th style="width: 20%">Tecnico Nome</th>
        <th style="width: 20%">Baixar PDF</th>
        </tr>
        `
            tempFiltredAgendamentos.slice(showObject.offset,showObject.limit).forEach(element => {
            document.getElementById("results-container-id").innerHTML += `
              <tr style="background-color: rgb(58, 56, 56); color:white; height: 39px; padding: 5px;">
            <td  style="width: 20%;">${element.numero_serviço.split("-").reverse().join("/")}</td>
            <td style="width: 20%">${element.data_visita.replace("T", "_")}Hrs</td>
            <td style="width: 20%">${element.nome_tecnico}</td>
            <td style="width: 20%"><button value="${element.numero_serviço}" class="result-btn">Baixar PDF</button></td>
        </tr>
            `
        })
        tempFiltredAgendamentosVar = tempFiltredAgendamentos
        document.querySelectorAll(".result-btn").forEach(btn => {
            btn.addEventListener("click",(e) => handleSelected(e))
        })
        document.getElementById("title-description-id").innerHTML = `Pesquisa Atual: `
                  descriptionObjects.forEach(i => {
                    document.getElementById("title-description-id").innerHTML += " " + i + " |"
                  })
        console.log(tempFiltredAgendamentos)
    })
}

function handleInputs (input) {
    if (input.value !== "") {
        searchFilters[input.name] = input.value
        input.addEventListener("input",  handleSearchFilters)
    }else {
        delete searchFilters[input.name]
    }
}
function handleSelects (select) {
    if (select.value !== "") {
        searchFilters[select.name] = select.value
        select.addEventListener("change",  handleSearchFilters)
    }else {
        delete searchFilters[select.name]
    }
}

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", () => handleInputs(input))
})
document.querySelectorAll("select").forEach(select => {
    select.addEventListener("input", () => handleSelects(select))
})


function nextShhow (mode) {
    if (!tempFiltredAgendamentosVar) {
        tempFiltredAgendamentosVar = agendamentos
    }
    if (mode === true) {
        console.log(showObject.position, showObject.max)
        if (showObject.position >= showObject.max) {
            return
        }
        showObject.offset = showObject.offset + 10
        showObject.limit = showObject.limit + 10
        showObject.position = showObject.position + 1
    }
    if (mode === false) {
        if (showObject.offset === 0) {
            return
        }
        showObject.offset = showObject.offset - 10
        showObject.limit = showObject.limit - 10
        showObject.position = showObject.position -1
    }
    
    document.getElementById("position").innerHTML = showObject.position
    document.getElementById("results-container-id").innerHTML = `
    <tr style="background-color: black; color:white; height: 35px">
    <th style="width: 20%">Numero Ordem</th>
    <th style="width: 20%">Data Visita</th>
    <th style="width: 20%">Tecnico Nome</th>
    <th style="width: 20%">Baixar PDF</th>
    </tr>
        `
        tempFiltredAgendamentosVar.slice(showObject.offset,showObject.limit).forEach(element => {
            document.getElementById("results-container-id").innerHTML += `
              <tr style="background-color: rgb(58, 56, 56); color:white; height: 39px; padding: 5px;">
            <td  style="width: 20%;">${element.numero_serviço.split("-").reverse().join("/")}</td>
            <td style="width: 20%">${element.data_visita.replace("T", "_")}Hrs</td>
            <td style="width: 20%">${element.nome_tecnico}</td>
            <td style="width: 20%"><button value="${element.numero_serviço}" class="result-btn">Baixar PDF</button></td>
        </tr>
            `
        })

        document.querySelectorAll(".result-btn").forEach(btn => {
            btn.addEventListener("click",(e) => handleSelected(e))
        })
}


document.getElementById("next").addEventListener("click", () => {
    nextShhow(true)
})
document.getElementById("back").addEventListener("click", () => {
    nextShhow(false)
})