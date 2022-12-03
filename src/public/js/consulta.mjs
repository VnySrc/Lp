var agendamentos
var searchFilters = {}
var showObject = {
    offset: 0,
    limit: 10,
    position: 1,
    max: 0
}
var tempFiltredAgendamentosVar

import { getAgendamentos, getAgendamentosById, sendAgendamentos} from "./objects.mjs"

async function init () {
    agendamentos = await getAgendamentos(0, 9999)
    agendamentos = agendamentos.sort((a, b) => {
        if (a.hour > b.hour) {
          return -1;
        }
        
        if (a.hour < b.hour) {
          return 1;
        }
        
        // a must be equal to b
        return 0;
      })
      showObject.max = Math.ceil(agendamentos.length / 10)
      document.getElementById("total").innerHTML = showObject.max

      agendamentos.slice(showObject.offset,showObject.limit).forEach(element => {
        document.getElementById("results-container-id").innerHTML += `
        <tr style="background-color: rgb(58, 56, 56); color:white; height: 39px; padding: 5px;">
        <td  style="width: 20%;">${element.hour.split("/")[0].split("-").reverse().join("/")} - ${element.hour.split("/")[1]}Hrs</td>
        <td style="width: 20%">${element.nome}</td>
        <td style="width: 20%" class="tel-resp">${element.equipamento}</td>
        <td style="width: 20%"><button value="${element.id}" class="result-btn">Exibir</button></td>
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
        document.getElementById("results-container-id").innerHTML = `
        <tr style="background-color: black; color:white; height: 35px">
        <th style="width: 20%">Criado Data</th>
        <th style="width: 20%">Nome</th>
        <th style="width: 20%">Equipamento</th>
        <th style="width: 20%">Detalhes</th>
      </tr>
        `
        agendamentos.slice(showObject.offset,showObject.limit).forEach(element => {
            document.getElementById("results-container-id").innerHTML += `
            <tr style="background-color: rgb(58, 56, 56); color:white; height: 39px; padding: 5px;">
            <td  style="width: 20%;">${element.hour.split("/")[0].split("-").reverse().join("/")} - ${element.hour.split("/")[1]}Hrs</td>
            <td style="width: 20%">${element.nome}</td>
            <td style="width: 20%">${element.equipamento}</td>
            <td style="width: 20%"><button value="${element.id}" class="result-btn">Exibir</button></td>
        </tr>
            `
        })
        document.querySelectorAll(".result-btn").forEach(btn => {
            btn.addEventListener("click",(e) => handleSelected(e))
        })
    })
}
init()

async function handleSelected (e) {
    const response = await getAgendamentosById(e.target.value)
    console.log(response)
    document.getElementById("infos-container-id").innerHTML += `
    <section>
    <label for="">
        <strong>  Nome:  </strong>
    </label>
    <span>
         ${response["nome"]}
    </span>
   </section>
   <section>
    <label for="">
        <strong>  Telefone:  </strong>
    </label>
    <span>
         ${response["telefone"]}
    </span>
   </section>
   <section>
    <label for="">
        <strong>  Equipamento:  </strong>
    </label>
    <span>
         ${response["equipamento"]}
    </span>
   </section>
     <section>
    <label for="">
        <strong>  Data criação:  </strong>
    </label>
    <span>
         ${response["hour"]}
    </span>
   </section>
    `
    showselectedInfo(response)
    document.getElementById("myModal").style.display = "block";
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
        if (item === "hour") {
            return
        }
    document.getElementById("infos-container-id").innerHTML += `
    <section>
    <label for="">
        <strong>  ${item[0].toUpperCase()+item.slice(1).replaceAll("_", " ")}:  </strong>
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
        <th style="width: 20%">Criado Data</th>
        <th style="width: 20%">Nome</th>
        <th style="width: 20%">Equipamento</th>
        <th style="width: 20%">Detalhes</th>
      </tr>
        `
        tempFiltredAgendamentos.slice(showObject.offset,showObject.limit).forEach(element => {
            document.getElementById("results-container-id").innerHTML += `
            <tr style="background-color: rgb(58, 56, 56); color:white; height: 39px; padding: 5px;">
                <td  style="width: 20%;">${element.hour.split("/")[0].split("-").reverse().join("/")} - ${element.hour.split("/")[1]}Hrs</td>
                <td style="width: 20%">${element.nome}</td>
                <td style="width: 20%">${element.equipamento}</td>
                <td style="width: 20%"><button value="${element.id}" class="result-btn">Exibir</button></td>
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
                    if (a.hour > b.hour) {
                      return -1;
                    }
                    if (a.hour < b.hour) {
                      return 1;
                    }
                    // a must be equal to b
                    return 0;
                  })
            }else {
                descriptionObjects.push("Mais Antigo")
                tempFiltredAgendamentos = tempFiltredAgendamentos.sort((a, b) => {
                    if (a.hour > b.hour) {
                      return 1;
                    }
                    if (a.hour < b.hour) {
                      return -1;
                    }
                    // a must be equal to b
                    return 0;
                  })
            }
           
              document.getElementById("results-container-id").innerHTML = `
              <tr style="background-color: black; color:white; height: 35px">
              <th style="width: 20%">Criado Data</th>
              <th style="width: 20%">Nome</th>
              <th style="width: 20%">Equipamento</th>
              <th style="width: 20%">Detalhes</th>
            </tr>
              `
              tempFiltredAgendamentos.slice(showObject.offset,showObject.limit).forEach(element => {
                  document.getElementById("results-container-id").innerHTML += `
                  <tr style="background-color: rgb(58, 56, 56); color:white; height: 39px; padding: 5px;">
                  <td  style="width: 20%;">${element.hour.split("/")[0].split("-").reverse().join("/")} - ${element.hour.split("/")[1]}Hrs</td>
                  <td style="width: 20%">${element.nome}</td>
                  <td style="width: 20%">${element.equipamento}</td>
                  <td style="width: 20%"><button value="${element.id}" class="result-btn">Exibir</button></td>
              </tr>
                  `})
                  tempFiltredAgendamentosVar = tempFiltredAgendamentos
                  document.querySelectorAll(".result-btn").forEach(btn => {
                    btn.addEventListener("click",(e) => handleSelected(e))
                })
                  document.getElementById("title-description-id").innerHTML = `Pesquisa atual: `
                  descriptionObjects.forEach(i => {
                    document.getElementById("title-description-id").innerHTML += " " + i + " |"
                  })
                  return
        }
        descriptionObjects.push(filtro + ": "+ searchFilters[filtro])
        tempFiltredAgendamentos = tempFiltredAgendamentos.filter(agendamento => agendamento[filtro].toLowerCase().includes(searchFilters[filtro].toLowerCase()))
        tempFiltredAgendamentosVar = tempFiltredAgendamentos
       // tempFiltredAgendamentos = tempFiltredAgendamentos.filter(agendamento => agendamento[filtro] === searchFilters[filtro].replaceAll("/", "-"))
        if (tempFiltredAgendamentos.length < 1) {
            alert("Sem resultados para esta pesquisa!")
        }
        document.getElementById("results-container-id").innerHTML = `
        <tr style="background-color: black; color:white; height: 35px">
        <th style="width: 20%">Criado Data</th>
        <th style="width: 20%">Nome</th>
        <th style="width: 20%">Equipamento</th>
        <th style="width: 20%">Detalhes</th>
      </tr>
        `
            tempFiltredAgendamentos.slice(showObject.offset,showObject.limit).forEach(element => {
            document.getElementById("results-container-id").innerHTML += `
            <tr style="background-color: rgb(58, 56, 56); color:white; height: 39px; padding: 5px;">
            <td  style="width: 20%;">${element.hour.split("/")[0].split("-").reverse().join("/")} - ${element.hour.split("/")[1]}Hrs</td>
            <td style="width: 20%">${element.nome}</td>
            <td style="width: 20%">${element.equipamento}</td>
            <td style="width: 20%"><button value="${element.id}" class="result-btn">Exibir</button></td>
        </tr>
            `
        })
        tempFiltredAgendamentosVar = tempFiltredAgendamentos
        document.querySelectorAll(".result-btn").forEach(btn => {
            btn.addEventListener("click",(e) => handleSelected(e))
        })
        document.getElementById("title-description-id").innerHTML = `Pesquisa atual: `
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
        <th style="width: 20%">Criado Data</th>
        <th style="width: 20%">Nome</th>
        <th style="width: 20%">Equipamento</th>
        <th style="width: 20%">Detalhes</th>
      </tr>
        `
        tempFiltredAgendamentosVar.slice(showObject.offset,showObject.limit).forEach(element => {
            document.getElementById("results-container-id").innerHTML += `
            <tr style="background-color: rgb(58, 56, 56); color:white; height: 39px; padding: 5px;">
            <td  style="width: 20%;">${element.hour.split("/")[0].split("-").reverse().join("/")} - ${element.hour.split("/")[1]}Hrs</td>
            <td style="width: 20%">${element.nome}</td>
            <td style="width: 20%">${element.equipamento}</td>
            <td style="width: 10%"><button value="${element.id}" class="result-btn">Exibir</button></td>
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