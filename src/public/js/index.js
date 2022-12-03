// WARNING! This file contains some subset of JS that is not supported by type inference.
// You can try checking 'Transpile to ES5' checkbox if you want the types to be inferred
'use strict';

function detectar_mobile() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
       return true;
     }
    else {
       return false;
     }
   }

   if (detectar_mobile()) {
    document.body.style.fontSize = "14px"
    document.querySelector(".grid-title").style.display = "none"
    document.querySelector(".grid-sub-title").style.fontSize = "17px"
    document.querySelector(".grid-sub-title").style.marginTop = "15px"
    document.querySelector(".grid-sub-title").style.marginBottom = "15px"
    document.querySelector(".left-img").style.height= "150px"
    
   }

import{
  sendAgendamentos as sendAgendamentos,
  getAgendamentos as getAgendamentos,
  getAgendamentosById as getAgendamentosById
}from "./objects.mjs";
const _0xade032$jscomp$0 = _0x3e57$jscomp$0;
(function(_0xf683d7$jscomp$0, _0x45b211$jscomp$0) {
  const _0x31d596$jscomp$0 = _0x3e57$jscomp$0;
  const _0x3be623$jscomp$0 = _0xf683d7$jscomp$0();
  for (; !![];) {
    try {
      const _0x47739c$jscomp$0 = parseInt(_0x31d596$jscomp$0(312)) / 1 + parseInt(_0x31d596$jscomp$0(232)) / 2 + -parseInt(_0x31d596$jscomp$0(142)) / 3 + -parseInt(_0x31d596$jscomp$0(370)) / 4 + parseInt(_0x31d596$jscomp$0(366)) / 5 * (-parseInt(_0x31d596$jscomp$0(141)) / 6) + -parseInt(_0x31d596$jscomp$0(369)) / 7 + parseInt(_0x31d596$jscomp$0(340)) / 8 * (parseInt(_0x31d596$jscomp$0(342)) / 9);
      if (_0x47739c$jscomp$0 === _0x45b211$jscomp$0) {
        break;
      } else {
        _0x3be623$jscomp$0["push"](_0x3be623$jscomp$0["shift"]());
      }
    } catch (_0x4f0ed6$jscomp$0) {
      _0x3be623$jscomp$0["push"](_0x3be623$jscomp$0["shift"]());
    }
  }
})(_0x1fed$jscomp$0, 497223);
const firebaseConfig$jscomp$0 = {
  "apiKey" : _0xade032$jscomp$0(151),
  "authDomain" : _0xade032$jscomp$0(196),
  "projectId" : _0xade032$jscomp$0(225),
  "storageBucket" : "lpchamados-41af0.appspot.com",
  "messagingSenderId" : _0xade032$jscomp$0(202),
  "appId" : _0xade032$jscomp$0(133)
};
firebase[_0xade032$jscomp$0(336)](firebaseConfig$jscomp$0);
const db$jscomp$1 = firebase[_0xade032$jscomp$0(274)]();
const actionBtns$jscomp$0 = document["querySelectorAll"](_0xade032$jscomp$0(195));
const btn1$jscomp$0 = document["getElementById"](_0xade032$jscomp$0(377));
const btn2$jscomp$0 = document["getElementById"]("action-btn-2");
const btn3$jscomp$0 = document[_0xade032$jscomp$0(364)](_0xade032$jscomp$0(206));
const btn4$jscomp$0 = document["getElementById"](_0xade032$jscomp$0(194));
const nextMesBtn$jscomp$0 = document[_0xade032$jscomp$0(364)]("next-month-button");
const backMesBtn$jscomp$0 = document["getElementById"](_0xade032$jscomp$0(170));
const dateInput$jscomp$0 = document[_0xade032$jscomp$0(364)]("date");
const dateContainer$jscomp$0 = document[_0xade032$jscomp$0(279)](_0xade032$jscomp$0(254));
const inputsContainer$jscomp$0 = document[_0xade032$jscomp$0(279)](".show-inputs-container");
function _0x1fed$jscomp$0() {
  const _0x9bafbe$jscomp$0 = ['</span>\n\t\t\t\t<span><strong>Se tiver alguma duvida ou queira continuar conversando clique no botão abaixo </strong> </span>\n\t\t\t\t<a href="https://api.whatsapp.com/send/?phone=5551992767676&text&type=phone_number&app_absent=0"><button id="whats-btn" class="action-btns">Contato Whatsapp</button></a>\n\t\t\t', "MAQUINA GELO", "GELADEIRA DUPLEX 2 PORTAS FROSTFREE", "https://sigdelta.com.br/vitor/api_chamado/ConsultaValoresChamado.php?equipamento=", "755691owEWha", "AR CENTRAL", "11111111111", "split", "Novembro", "VISACOOLER BEBIDAS", "marca", "PRESSURIZADOR", "reverse", "input", 
  "append", "display", "secadora", "AR SPLIT", "find", "aquecedor", "Julho", '\n\t\t</p>\n\t\t<p">\n\t\t\t<strong>Equipamento:</strong> ', "show-4", "set", "55555555555555", "includes", "setDate", "manh\u00e3", "initializeApp", "unshift", "geladeira", "#data-input-container", "6336WEozpR", "SEM MARCA", "14616LDBtRY", '">\n\t\t\t', "getForm3", "forEach", "Outubro", "PANASONIC", "valor_mao_obra", "show-", "</span>\n\t\t\t\t<span><strong>Data: </strong>", "querySelectorAll", "cep", "ob2", "Junho", "OUTRO", 
  "getMonth", "substring", "trim", "cpf", "log", "BOSCH", '</strong>\n\t\t\tdeslocamento <strong>R$35,00</strong> <strong>paga somente uma vez</strong>\n\t\t\t</span>\n\t\t</section>\n\t\t</section>\n\t\t<section class="input-container-no-border">\n\t\t<button id="action-btn-4" class="action-btns">Finalizar</button>\n\t\t</section>\n\t\t', "</span>\n\t\t\t\t<span><strong>Turno: </strong>", "getElementById", "CONSUL", "15gtQrws", "date", "Authorization", "4257820NmRwCp", "462252dVXaYo", '\n\t\t\t<option value=""> Selecione </option>\n\t\t\t<option value="btus"> btus </option>\n\t\t\t<option value="litros"> litros </option>\n\t\t\t<option value="polegadas"> polegadas </option>\n\t\t\t<option value="kg"> kg </option>', 
  "AR JANELA", '\n\t<section class="input-container">\n\t<label for="">* Data</label>\n\t<input id="date" type="date" placeholder="DATA" cl>\n\t</section>\n\t<section class="input-container">\n\t<label for="">* Turno</label>\n\t<select id="turno" type="checkbox" placeholder="TURNO">\n\t\t<option value="">\n\t\t\tSelecione a data antes\n\t\t</option>\n\t</select>\n\t</section>\n\t\t', "\n\t\t", "BEBEDOR INDSTRUAL", "tipo_capacidade", "action-btn-1", "maquina", '"> ', "55555555555", '<button class="grid-item" disabled>', 
  "</button>", "&tipo_atendimento=", "\n\t\t\t\t<strong> Houve um erro na marca\u00e7\u00e3o da visita, caso persista porfavor informe a empresa <strong>\n\t\t\t", "equipamento-datalist", "sendForm", "bebedor", "toUpperCase", "1:713827956601:web:52872df3371d1e3ac721a8", "update", "warning-cpf", "mes", "modelo_confirma\u00e7\u00e3o", "ref", "remove", "follow", "1559562YEHkxQ", "379992yoxFNa", "44444444444444", "MIDEA", "\n\t\t</option>\n\t\t", "capacidade-tipo", "data-grid-container-id", "HITACHI", 
  "</option>", "77777777777777", "AIzaSyD9jmfLNJAcLfok3o5QFRVxAun390YxEzQ", "toLowerCase", "88888888888", '\n\t\t</p>\n\t</section>\n  </section>\n  <section class="input-container-no-border">\n\t<button id="action-btn-4" class="action-btns">Finalizar</button>\n  </section>\n\t\t', "prazo_minimo_atendimento", "collection", "PHILCO", "GELADEIRA DUPLEX 2 PORTAS", "value", "datas", "erro", "TOSHIBA", "cidade", "AQUECEDOR A GAS", "click", "getDate", "cooler", "tipo", "Houve um erro no servidor ao marcar visita, verifique se as informa\u00e7\u00f5es inseridas s\u00e3o validas. Caso persista, porfavor contate o suporte", 
  "back-month-button", "status", "none", "getFullYear", "SPRINGER", "removeAttribute", "GET", "warning", "where", "FORNO ELETRICO", '\n\t\t</p>\n\t\t<p">\n\t\t\t<strong>Data:</strong> ', '<button class="grid-item">', "ob1", "classList", "NFD", "66666666666", "bairro", "rua", "assign", '\n\t\t<div>\n\t\t<h2 class="grid-sub-title">\n\t\t\tConfirma\u00e7\u00e3o\n\t\t</h2>\n\t\t</div>\n\t\t<section class="input-container-no-border flex-container">\n        <span style="font-weight: bold; font-size: 23px;">\n\t\t\tVou lhe explicar nossa forma de trabalho\n\t\t</span>\n\t\t<span>\n\t\t\tVamos at\u00e9 o local e  fazemos uma avalia\u00e7\u00e3o de seu equipamento\n\t\t\t90% dos casos, nossos t\u00e9cnicos resolvem no local sem a necessidade de recolher o equipamento\n\t\t\t<strong>Importante dizer que o Custo de mao de obra e deslocamento sendo feito no cliente ou recolhendo \u00e9 sempre o mesmo</strong>\n\t\t</span>\n\t\t<section class="flex-container-1">\n\t\t\t<span  style="font-weight: bold;">\n\t\t\t\tValores\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\tNossa avalia\u00e7\u00e3o \u00e9 composta por M\u00e3o de Obra , Deslocamento e Pe\u00e7as (caso for necess\u00e1rio)\n\t\t\t\tm\u00e3o de obra de <strong>R$', 
  "fora_garantia", "televisor", "logradouro", "telefone", "action-btn-4", ".action-btns", "lpchamados-41af0.firebaseapp.com", "toString", "mesName", "\n\t\t\t  <strong> Houve um erro na marca\u00e7\u00e3o da visita, caso persista porfavor informe a empresa <strong>\n\t\t  ", "88888888888888", "Mar\u00e7o", "713827956601", ".grid-item", "slice", "coller", "action-btn-3", "json", "charAt", "not-show", "marcas", "stringify", "add", "Maio", "toLocaleDateString", "complemento", "reload", "flex", "/json/", 
  '\n\t<div>\n\t<h2 class="grid-sub-title">\n\t\tConfirma\u00e7\u00e3o\n\t</h2>\n  </div>\n  <section class="input-container-no-border flex-container">\n\t<span style="font-weight: bold;">\n\t\tPorfavor confirme para finalizar o agendamento da visita\n\t</span>\n\t<span>\n\t\tConfirmar agendamento com as seguintes informa\u00e7\u00f5es\n\t</span>\n  \n\t<section class="flex-container-1">\n\t\t<p">\n\t\t<strong>Nome:</strong> ', "then", "POST", "warning-cep", "defeito", "polegadas", "lpchamados-41af0", 
  "form1", "warning-tel", "disabled", "https://sigdelta.com.br/vitor/api_chamado/ConsultaEquipamentos.php", "22222222222", "Janeiro", "171184yOgFFw", "turnos", "33333333333", "numero", "CARRIER", "localidade", "noite", "Access-Control-Allow-Origin", "pt-br", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidXN1YXJpbyJ9.MHnjrvFumPP4TqwXkI71G7MY9N_j4tLPIT7tIU6cFXY", "getForm2", "turno", "style", "off", "bebidas", "change", "innerHTML", "<option value=", "filter", "form2", "block", "capacidade", ".show-data-container", 
  "keydown", "https://viacep.com.br/ws/", "data_agendamento", "<option value=''>Selecione</option>", '</strong>\n\t\t\t\tdeslocamento <strong>R$35,00</strong> <strong>paga somente uma vez</strong>\n\t\t\t</span>\n\t\t\t<span  style="font-weight: bold;">\n\t\t\t\tSE O CLIENTE FIZER O SERVI\u00c7O:\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\tNesse caso cliente ter\u00e1 os seguintes custos\n\t\t\t\tm\u00e3o de obra de  <strong>R$', "replace", "getTime", "33333333333333", "showFinalInfo", "microondas", "SECADORA DE ROUPAS", 
  '\n\t\t<option value="', "Houve um erro", '<option value="', "FUJITSU", "FREEZER VERTICAL", "00000000000", "TELEVISOR", '</strong>\n\t\t\t\tdeslocamento <strong>R$35,00</strong> <strong>paga somente uma vez</strong>\n\t\t\t\tpe\u00e7as ( <strong>se for necess\u00e1rio, e ser\u00e1 or\u00e7ado antes</strong> )\n\t\t\t</span>\n\t\t\t<span  style="font-weight: bold;">\n\t\t\t\tSE O CLIENTE N\u00c3O FIZER O SERVI\u00c7O:\n\t\t\t</span>\n\t\t\t<span>\n\t\t\tNesse caso cliente ter\u00e1 os seguintes custos\n\t\t\tm\u00e3o de obra de <strong>R$', 
  "firestore", "66666666666666", "btus", "\n\t\t\t\t<span><strong>Equipamento: </strong>", "equipamento", "querySelector", '</strong>\n\t\t\t\tdeslocamento <strong>R$35,00</strong> <strong>paga somente uma vez</strong>\n\t\t\t</span>\n\t\t</section>\n\t</section>\n\t<section class="input-container-no-border">\n\t\t<button id="action-btn-4" class="action-btns">Finalizar</button>\n\t</section>\n\t\t', "orderBy", "equipamentos", "form3", "getForm1", " </option>", "tarde", "get", "replaceAll", "Setembro", 
  "referencia", "MAQUINA LAVA-SECA", "length", "final-info", "desc", "doc", "https://sigdelta.com.br/vitor/api_chamado/AbreChamado.php", "data", "GREE", "LAVA-LOU\u00c7A DOMESTICA", "preventDefault", "warning-data", "addEventListener", "location", '</strong>\n\t\t\t\tdeslocamento <strong>R$35,00</strong> <strong>paga somente uma vez</strong>\n\t\t\t</span>\n\t\t\t<span  style="font-weight: bold;">\n\t\t\t\tSE O CLIENTE FIZER O SERVI\u00c7O:\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\tNesse caso cliente ter\u00e1 os seguintes custos\n\t\t\t\tm\u00e3o de obra de <strong>R$', 
  "Agosto", "RINNAI", "push"];
  _0x1fed$jscomp$0 = function() {
    return _0x9bafbe$jscomp$0;
  };
  return _0x1fed$jscomp$0();
}
var show$jscomp$0 = 1;
var datePosition$jscomp$0 = 0;
var selectedMes$jscomp$0;
var selectedMesNumber$jscomp$0;
var selectedDay$jscomp$0;
var prazo$jscomp$0;
var dataObject$jscomp$0 = {
  "form1" : {},
  "form2" : {},
  "form3" : {}
};
var finalData$jscomp$0 = {};
var daysId$jscomp$0 = {};
var capacityType$jscomp$0;
const apiData$jscomp$0 = {};
const daysArrayFirebase$jscomp$0 = [];
async function getDaysArray$jscomp$0() {
  const _0x46dd6d$jscomp$0 = _0xade032$jscomp$0;
  await db$jscomp$1["collection"]("datas")[_0x46dd6d$jscomp$0(281)]("id", _0x46dd6d$jscomp$0(294))["limit"](150)[_0x46dd6d$jscomp$0(287)]()[_0x46dd6d$jscomp$0(220)]((_0x5e6b6d$jscomp$0) => {
    _0x5e6b6d$jscomp$0["forEach"]((_0x11d360$jscomp$0) => {
      const _0x132baf$jscomp$0 = _0x3e57$jscomp$0;
      daysArrayFirebase$jscomp$0[_0x132baf$jscomp$0(307)](_0x11d360$jscomp$0["data"]());
    });
  });
  console[_0x46dd6d$jscomp$0(360)](daysArrayFirebase$jscomp$0);
}
getDaysArray$jscomp$0(), actionBtns$jscomp$0[_0xade032$jscomp$0(345)]((_0x5da0c4$jscomp$0) => {
  const _0x9fd9f2$jscomp$0 = _0xade032$jscomp$0;
  _0x5da0c4$jscomp$0[_0x9fd9f2$jscomp$0(302)](_0x9fd9f2$jscomp$0(165), nextShow$jscomp$0);
});
class formActions$jscomp$0 {
  constructor() {
  }
  [_0xade032$jscomp$0(284)]() {
    const _0x2bcf45$jscomp$0 = _0xade032$jscomp$0;
    const _0x532bfc$jscomp$0 = document[_0x2bcf45$jscomp$0(364)]("date")[_0x2bcf45$jscomp$0(159)];
    const _0x446cb0$jscomp$0 = document[_0x2bcf45$jscomp$0(364)]("turno")["value"]["normalize"](_0x2bcf45$jscomp$0(184))[_0x2bcf45$jscomp$0(260)](/[\u0300-\u036f]/g, "");
    const _0x587551$jscomp$0 = document["getElementById"](_0x2bcf45$jscomp$0(168))[_0x2bcf45$jscomp$0(159)];
    const _0x43cbe1$jscomp$0 = document[_0x2bcf45$jscomp$0(364)](_0x2bcf45$jscomp$0(193))[_0x2bcf45$jscomp$0(159)]["replace"](/\D/g, "");
    const _0x23ea9b$jscomp$0 = document[_0x2bcf45$jscomp$0(364)](_0x2bcf45$jscomp$0(182))[_0x2bcf45$jscomp$0(159)];
    dataObject$jscomp$0[_0x2bcf45$jscomp$0(226)] = {
      "data_agendamento" : _0x532bfc$jscomp$0,
      "turno" : _0x446cb0$jscomp$0,
      "tipo_atendimento" : _0x587551$jscomp$0,
      "telefone" : _0x43cbe1$jscomp$0,
      "obs_atendimento" : _0x23ea9b$jscomp$0
    };
  }
  async[_0xade032$jscomp$0(242)]() {
    const _0x391a3c$jscomp$0 = _0xade032$jscomp$0;
    const _0x26c352$jscomp$0 = document["getElementById"](_0x391a3c$jscomp$0(278))[_0x391a3c$jscomp$0(159)][_0x391a3c$jscomp$0(358)]();
    const _0x1a185c$jscomp$0 = document[_0x391a3c$jscomp$0(364)](_0x391a3c$jscomp$0(318))[_0x391a3c$jscomp$0(159)];
    const _0x47eb58$jscomp$0 = parseInt(document[_0x391a3c$jscomp$0(364)](_0x391a3c$jscomp$0(253))[_0x391a3c$jscomp$0(159)]);
    const _0x3733c3$jscomp$0 = document["getElementById"]("defeito")[_0x391a3c$jscomp$0(159)];
    const _0xf1bc41$jscomp$0 = document[_0x391a3c$jscomp$0(364)](_0x391a3c$jscomp$0(146))[_0x391a3c$jscomp$0(159)];
    const _0x2793a6$jscomp$0 = document["getElementById"](_0x391a3c$jscomp$0(353))["value"];
    dataObject$jscomp$0[_0x391a3c$jscomp$0(251)] = {
      "equipamento" : _0x26c352$jscomp$0,
      "marca" : _0x1a185c$jscomp$0,
      "capacidade" : _0x47eb58$jscomp$0,
      "capacidade_tipo" : _0xf1bc41$jscomp$0,
      "defeito" : _0x3733c3$jscomp$0,
      "obs_equipamento" : _0x2793a6$jscomp$0
    };
  }
  [_0xade032$jscomp$0(344)]() {
    const _0x553412$jscomp$0 = _0xade032$jscomp$0;
    const _0x35e6ac$jscomp$0 = document[_0x553412$jscomp$0(364)]("nome")[_0x553412$jscomp$0(159)];
    const _0x3e7dac$jscomp$0 = document[_0x553412$jscomp$0(364)](_0x553412$jscomp$0(359))[_0x553412$jscomp$0(159)]["replace"](/\D/g, "")["replaceAll"](".", "")["replaceAll"]("-", "")[_0x553412$jscomp$0(288)]("_", "")[_0x553412$jscomp$0(288)]("/", "");
    const _0x2b83f9$jscomp$0 = document[_0x553412$jscomp$0(364)](_0x553412$jscomp$0(163))[_0x553412$jscomp$0(159)];
    const _0x214867$jscomp$0 = document[_0x553412$jscomp$0(364)](_0x553412$jscomp$0(186))[_0x553412$jscomp$0(159)];
    const _0x3e6cb5$jscomp$0 = document[_0x553412$jscomp$0(364)](_0x553412$jscomp$0(187))[_0x553412$jscomp$0(159)];
    const _0x14761c$jscomp$0 = document[_0x553412$jscomp$0(364)]("numero")[_0x553412$jscomp$0(159)];
    const _0x38c79a$jscomp$0 = document["getElementById"](_0x553412$jscomp$0(215))[_0x553412$jscomp$0(159)];
    const _0x28be95$jscomp$0 = parseInt(document[_0x553412$jscomp$0(364)]("cep")["value"][_0x553412$jscomp$0(260)](/\D/g, "")[_0x553412$jscomp$0(288)](".", "")[_0x553412$jscomp$0(288)]("-", "")["replaceAll"]("_", "")[_0x553412$jscomp$0(288)]("/", ""));
    const _0x215808$jscomp$0 = document[_0x553412$jscomp$0(364)](_0x553412$jscomp$0(290))["value"];
    dataObject$jscomp$0["form3"] = {
      "nome" : _0x35e6ac$jscomp$0,
      "cpf" : _0x3e7dac$jscomp$0,
      "cep" : _0x28be95$jscomp$0,
      "cidade" : _0x2b83f9$jscomp$0,
      "bairro" : _0x214867$jscomp$0,
      "logradouro" : _0x3e6cb5$jscomp$0,
      "numero" : _0x14761c$jscomp$0,
      "complemento" : _0x38c79a$jscomp$0,
      "referencia" : _0x215808$jscomp$0
    };
    Object[_0x553412$jscomp$0(188)](finalData$jscomp$0, dataObject$jscomp$0[_0x553412$jscomp$0(226)], dataObject$jscomp$0["form2"], dataObject$jscomp$0[_0x553412$jscomp$0(283)]);
  }
  async[_0xade032$jscomp$0(130)]() {
    //console.log("yyy")
    const _0x36de3a$jscomp$0 = _0xade032$jscomp$0;
    var _0x5d99e2$jscomp$0 = new Headers;
    _0x5d99e2$jscomp$0[_0x36de3a$jscomp$0(322)](_0x36de3a$jscomp$0(368), _0x36de3a$jscomp$0(241));
    _0x5d99e2$jscomp$0[_0x36de3a$jscomp$0(322)]("Access-Control-Allow-Origin", "*");
    var _0x455bfa$jscomp$0 = {
      "method" : _0x36de3a$jscomp$0(221),
      "body" : JSON[_0x36de3a$jscomp$0(211)](finalData$jscomp$0),
      "headers" : _0x5d99e2$jscomp$0,
      "redirect" : "follow"
    };
    let _0x2ebd2d$jscomp$0;
    try {
      _0x2ebd2d$jscomp$0 = await fetch(_0x36de3a$jscomp$0(296), _0x455bfa$jscomp$0);
      sendAgendamentos(finalData$jscomp$0);
    } catch (_0xfc747b$jscomp$0) {
      alert(_0x36de3a$jscomp$0(169));
      window[_0x36de3a$jscomp$0(303)][_0x36de3a$jscomp$0(216)]();
      console[_0x36de3a$jscomp$0(360)](_0xfc747b$jscomp$0);
    }
    if (_0x2ebd2d$jscomp$0[_0x36de3a$jscomp$0(171)] === 200 || _0x2ebd2d$jscomp$0["status"] === 201) {
      let _0x521926$jscomp$0;
      const _0xa69c8d$jscomp$0 = await db$jscomp$1[_0x36de3a$jscomp$0(156)](_0x36de3a$jscomp$0(160))[_0x36de3a$jscomp$0(178)]("data", "==", document[_0x36de3a$jscomp$0(364)](_0x36de3a$jscomp$0(367))[_0x36de3a$jscomp$0(159)])[_0x36de3a$jscomp$0(287)]();
      _0xa69c8d$jscomp$0["forEach"]((_0x5dd18e$jscomp$0) => {
        _0x521926$jscomp$0 = _0x5dd18e$jscomp$0;
      });
      if (_0x521926$jscomp$0) {
        _0x521926$jscomp$0[_0x36de3a$jscomp$0(138)][_0x36de3a$jscomp$0(134)]({
          "turnos" : [..._0x521926$jscomp$0[_0x36de3a$jscomp$0(297)]()["turnos"], document["getElementById"](_0x36de3a$jscomp$0(243))[_0x36de3a$jscomp$0(159)]]
        });
      } else {
        db$jscomp$1[_0x36de3a$jscomp$0(156)](_0x36de3a$jscomp$0(160))[_0x36de3a$jscomp$0(295)]()[_0x36de3a$jscomp$0(331)]({
          "id" : (new Date)[_0x36de3a$jscomp$0(261)]()[_0x36de3a$jscomp$0(197)](),
          "data" : document["getElementById"](_0x36de3a$jscomp$0(367))[_0x36de3a$jscomp$0(159)],
          "turnos" : [document["getElementById"](_0x36de3a$jscomp$0(243))[_0x36de3a$jscomp$0(159)]]
        });
      }
    } else {
      console["log"](_0x2ebd2d$jscomp$0[_0x36de3a$jscomp$0(171)]);
      alert(_0x36de3a$jscomp$0(169));
      window[_0x36de3a$jscomp$0(303)][_0x36de3a$jscomp$0(216)]();
      document[_0x36de3a$jscomp$0(364)](_0x36de3a$jscomp$0(293))["innerHTML"] = _0x36de3a$jscomp$0(128);
      console[_0x36de3a$jscomp$0(360)](_0x36de3a$jscomp$0(267));
    }
  }
  async[_0xade032$jscomp$0(263)]() {
    const _0x145de4$jscomp$0 = _0xade032$jscomp$0;
    if (document["getElementById"](_0x145de4$jscomp$0(278))[_0x145de4$jscomp$0(159)]) {
      document[_0x145de4$jscomp$0(364)](_0x145de4$jscomp$0(293))[_0x145de4$jscomp$0(248)] += _0x145de4$jscomp$0(277) + document[_0x145de4$jscomp$0(364)](_0x145de4$jscomp$0(278))[_0x145de4$jscomp$0(159)] + _0x145de4$jscomp$0(350) + document[_0x145de4$jscomp$0(364)](_0x145de4$jscomp$0(367))["value"]["split"]("-")[2] + "/" + document[_0x145de4$jscomp$0(364)](_0x145de4$jscomp$0(367))[_0x145de4$jscomp$0(159)][_0x145de4$jscomp$0(315)]("-")[1] + "/" + document[_0x145de4$jscomp$0(364)]("date")[_0x145de4$jscomp$0(159)][_0x145de4$jscomp$0(315)]("-")[0] + 
      _0x145de4$jscomp$0(363) + document["getElementById"](_0x145de4$jscomp$0(243))[_0x145de4$jscomp$0(159)] + _0x145de4$jscomp$0(308);
    } else {
      document[_0x145de4$jscomp$0(364)](_0x145de4$jscomp$0(293))["innerHTML"] = _0x145de4$jscomp$0(199);
      console[_0x145de4$jscomp$0(360)](_0x145de4$jscomp$0(267));
    }
  }
}
const formClass$jscomp$0 = new formActions$jscomp$0;
btn1$jscomp$0[_0xade032$jscomp$0(302)](_0xade032$jscomp$0(165), formClass$jscomp$0["getForm1"]), btn2$jscomp$0[_0xade032$jscomp$0(302)]("click", formClass$jscomp$0["getForm2"]), btn4$jscomp$0[_0xade032$jscomp$0(302)](_0xade032$jscomp$0(165), formClass$jscomp$0[_0xade032$jscomp$0(263)]), document[_0xade032$jscomp$0(364)](_0xade032$jscomp$0(168))[_0xade032$jscomp$0(302)](_0xade032$jscomp$0(321), handleShowDateInput$jscomp$0);
function handleShowDateInput$jscomp$0() {
  const _0x5b2307$jscomp$0 = _0xade032$jscomp$0;
  if (document["getElementById"]("tipo")[_0x5b2307$jscomp$0(159)]) {
    document["querySelector"](_0x5b2307$jscomp$0(339))[_0x5b2307$jscomp$0(248)] = _0x5b2307$jscomp$0(373);
    document["getElementById"](_0x5b2307$jscomp$0(367))[_0x5b2307$jscomp$0(302)](_0x5b2307$jscomp$0(165), () => {
      selectAndShowMes$jscomp$0(datePosition$jscomp$0);
    });
    document[_0x5b2307$jscomp$0(364)]("date")["addEventListener"](_0x5b2307$jscomp$0(165), showDataDaysContainer$jscomp$0);
    document[_0x5b2307$jscomp$0(279)]('[type="date"]')[_0x5b2307$jscomp$0(302)](_0x5b2307$jscomp$0(255), function() {
      const _0x587bf5$jscomp$0 = _0x5b2307$jscomp$0;
      return event[_0x587bf5$jscomp$0(300)](), ![];
    });
    document[_0x5b2307$jscomp$0(364)](_0x5b2307$jscomp$0(168))[_0x5b2307$jscomp$0(302)]("input", handleShowDateInput$jscomp$0);
  } else {
    document[_0x5b2307$jscomp$0(279)](_0x5b2307$jscomp$0(339))["innerHTML"] = _0x5b2307$jscomp$0(374);
  }
}
function _0x3e57$jscomp$0(_0x3836cc$jscomp$0, _0x7db586$jscomp$0) {
  const _0x1fed3b$jscomp$0 = _0x1fed$jscomp$0();
  return _0x3e57$jscomp$0 = function(_0x3e57b1$jscomp$0, _0x1a786e$jscomp$0) {
    _0x3e57b1$jscomp$0 = _0x3e57b1$jscomp$0 - 122;
    let _0x1fcdf4$jscomp$0 = _0x1fed3b$jscomp$0[_0x3e57b1$jscomp$0];
    return _0x1fcdf4$jscomp$0;
  }, _0x3e57$jscomp$0(_0x3836cc$jscomp$0, _0x7db586$jscomp$0);
}
const equipamento$jscomp$0 = document[_0xade032$jscomp$0(364)](_0xade032$jscomp$0(278))["addEventListener"](_0xade032$jscomp$0(247), () => {
  const _0x1f0491$jscomp$0 = _0xade032$jscomp$0;
  const _0x58f279$jscomp$0 = apiData$jscomp$0[_0x1f0491$jscomp$0(282)][_0x1f0491$jscomp$0(326)]((_0x401988$jscomp$0) => {
    return _0x401988$jscomp$0["equipamento"] === document["getElementById"](_0x1f0491$jscomp$0(278))["value"];
  });
  if (_0x58f279$jscomp$0 && _0x58f279$jscomp$0[_0x1f0491$jscomp$0(376)] !== null) {
    capacityType$jscomp$0 = _0x58f279$jscomp$0[_0x1f0491$jscomp$0(376)]["toLowerCase"]();
    document[_0x1f0491$jscomp$0(364)]("capacidade-tipo")[_0x1f0491$jscomp$0(248)] = '<option value="' + capacityType$jscomp$0 + _0x1f0491$jscomp$0(123) + capacityType$jscomp$0 + _0x1f0491$jscomp$0(285);
    document[_0x1f0491$jscomp$0(364)](_0x1f0491$jscomp$0(253))[_0x1f0491$jscomp$0(175)](_0x1f0491$jscomp$0(228));
  } else {
    const _0x42da70$jscomp$0 = document[_0x1f0491$jscomp$0(364)](_0x1f0491$jscomp$0(278))[_0x1f0491$jscomp$0(159)][_0x1f0491$jscomp$0(152)]()[_0x1f0491$jscomp$0(315)](" ");
    if (_0x42da70$jscomp$0[_0x1f0491$jscomp$0(333)]("ar") || _0x42da70$jscomp$0["includes"]("condicionado")) {
      capacityType$jscomp$0 = _0x1f0491$jscomp$0(276);
      document["getElementById"](_0x1f0491$jscomp$0(146))[_0x1f0491$jscomp$0(248)] = '<option value="' + capacityType$jscomp$0 + '"> ' + capacityType$jscomp$0 + _0x1f0491$jscomp$0(285);
      document[_0x1f0491$jscomp$0(364)](_0x1f0491$jscomp$0(253))[_0x1f0491$jscomp$0(175)]("disabled");
    } else {
      if (_0x42da70$jscomp$0[_0x1f0491$jscomp$0(333)](_0x1f0491$jscomp$0(338)) || _0x42da70$jscomp$0["includes"]("autoclave") || _0x42da70$jscomp$0[_0x1f0491$jscomp$0(333)](_0x1f0491$jscomp$0(327)) || _0x42da70$jscomp$0[_0x1f0491$jscomp$0(333)]("freezer") || _0x42da70$jscomp$0[_0x1f0491$jscomp$0(333)](_0x1f0491$jscomp$0(131)) || _0x42da70$jscomp$0[_0x1f0491$jscomp$0(333)](_0x1f0491$jscomp$0(205)) || _0x42da70$jscomp$0[_0x1f0491$jscomp$0(333)](_0x1f0491$jscomp$0(167)) || _0x42da70$jscomp$0[_0x1f0491$jscomp$0(333)](_0x1f0491$jscomp$0(246)) || 
      _0x42da70$jscomp$0[_0x1f0491$jscomp$0(333)]("forno") || _0x42da70$jscomp$0[_0x1f0491$jscomp$0(333)](_0x1f0491$jscomp$0(264))) {
        capacityType$jscomp$0 = "litros";
        document[_0x1f0491$jscomp$0(364)](_0x1f0491$jscomp$0(146))[_0x1f0491$jscomp$0(248)] = _0x1f0491$jscomp$0(268) + capacityType$jscomp$0 + _0x1f0491$jscomp$0(123) + capacityType$jscomp$0 + _0x1f0491$jscomp$0(285);
        document["getElementById"](_0x1f0491$jscomp$0(253))["removeAttribute"](_0x1f0491$jscomp$0(228));
      } else {
        if (_0x42da70$jscomp$0[_0x1f0491$jscomp$0(333)]("tv" || _0x42da70$jscomp$0[_0x1f0491$jscomp$0(333)]("televisao")) || _0x42da70$jscomp$0[_0x1f0491$jscomp$0(333)](_0x1f0491$jscomp$0(191))) {
          capacityType$jscomp$0 = _0x1f0491$jscomp$0(224);
          document[_0x1f0491$jscomp$0(364)](_0x1f0491$jscomp$0(146))[_0x1f0491$jscomp$0(248)] = _0x1f0491$jscomp$0(268) + capacityType$jscomp$0 + _0x1f0491$jscomp$0(123) + capacityType$jscomp$0 + _0x1f0491$jscomp$0(285);
          document[_0x1f0491$jscomp$0(364)]("capacidade")[_0x1f0491$jscomp$0(175)]("disabled");
        } else {
          if (_0x42da70$jscomp$0[_0x1f0491$jscomp$0(333)](_0x1f0491$jscomp$0(122)) || _0x42da70$jscomp$0[_0x1f0491$jscomp$0(333)](_0x1f0491$jscomp$0(324)) || _0x42da70$jscomp$0[_0x1f0491$jscomp$0(333)]("balcao")) {
            capacityType$jscomp$0 = "kg";
            document[_0x1f0491$jscomp$0(364)](_0x1f0491$jscomp$0(146))[_0x1f0491$jscomp$0(248)] = _0x1f0491$jscomp$0(268) + capacityType$jscomp$0 + _0x1f0491$jscomp$0(123) + capacityType$jscomp$0 + _0x1f0491$jscomp$0(285);
            document[_0x1f0491$jscomp$0(364)](_0x1f0491$jscomp$0(253))[_0x1f0491$jscomp$0(175)](_0x1f0491$jscomp$0(228));
          } else {
            capacityType$jscomp$0 = "";
            document["getElementById"](_0x1f0491$jscomp$0(146))[_0x1f0491$jscomp$0(248)] = _0x1f0491$jscomp$0(371);
            return;
          }
        }
      }
    }
    document[_0x1f0491$jscomp$0(364)]("capacidade-tipo")[_0x1f0491$jscomp$0(248)] = _0x1f0491$jscomp$0(268) + capacityType$jscomp$0 + _0x1f0491$jscomp$0(123) + capacityType$jscomp$0 + _0x1f0491$jscomp$0(285);
  }
});
const verifys$jscomp$0 = {
  1 : async() => {
    const _0x39786a$jscomp$0 = _0xade032$jscomp$0;
    const _0x51f403$jscomp$0 = document["getElementById"](_0x39786a$jscomp$0(278))[_0x39786a$jscomp$0(159)];
    const _0x21784c$jscomp$0 = document["getElementById"](_0x39786a$jscomp$0(318))[_0x39786a$jscomp$0(159)];
    const _0x2fcbe3$jscomp$0 = document[_0x39786a$jscomp$0(364)](_0x39786a$jscomp$0(253))[_0x39786a$jscomp$0(159)];
    const _0xc94d83$jscomp$0 = document[_0x39786a$jscomp$0(364)](_0x39786a$jscomp$0(223))["value"];
    const _0x446644$jscomp$0 = document[_0x39786a$jscomp$0(364)]("capacidade-tipo")[_0x39786a$jscomp$0(159)];
    const _0x21d4fd$jscomp$0 = document[_0x39786a$jscomp$0(364)](_0x39786a$jscomp$0(353))[_0x39786a$jscomp$0(159)];
    return !_0x51f403$jscomp$0 || !_0x21784c$jscomp$0 || !_0x2fcbe3$jscomp$0 || !_0xc94d83$jscomp$0 || !_0x446644$jscomp$0 ? ![] : !![];
  },
  2 : async() => {
    const _0x422905$jscomp$0 = _0xade032$jscomp$0;
    const _0x94a8ae$jscomp$0 = document["getElementById"](_0x422905$jscomp$0(367))[_0x422905$jscomp$0(159)];
    const _0x57b0e2$jscomp$0 = document["getElementById"](_0x422905$jscomp$0(243))[_0x422905$jscomp$0(159)];
    const _0x59280e$jscomp$0 = document[_0x422905$jscomp$0(364)]("tipo")["value"];
    const _0x8f8b4$jscomp$0 = document["getElementById"](_0x422905$jscomp$0(193))[_0x422905$jscomp$0(159)][_0x422905$jscomp$0(260)](/\D/g, "");
    return !_0x94a8ae$jscomp$0 || !_0x57b0e2$jscomp$0 || !_0x59280e$jscomp$0 || !_0x8f8b4$jscomp$0 ? ![] : !![];
  },
  3 : async() => {
    const _0x26e126$jscomp$0 = _0xade032$jscomp$0;
    const _0x477df9$jscomp$0 = document["getElementById"]("nome")[_0x26e126$jscomp$0(159)];
    const _0x20605e$jscomp$0 = document[_0x26e126$jscomp$0(364)](_0x26e126$jscomp$0(359))[_0x26e126$jscomp$0(159)][_0x26e126$jscomp$0(260)](/\D/g, "");
    const _0x5d58aa$jscomp$0 = document["getElementById"](_0x26e126$jscomp$0(163))["value"];
    const _0x31d02b$jscomp$0 = document[_0x26e126$jscomp$0(364)](_0x26e126$jscomp$0(186))[_0x26e126$jscomp$0(159)];
    const _0xa32a07$jscomp$0 = document["getElementById"](_0x26e126$jscomp$0(187))[_0x26e126$jscomp$0(159)];
    const _0x42c83e$jscomp$0 = document["getElementById"](_0x26e126$jscomp$0(235))[_0x26e126$jscomp$0(159)];
    const _0x43ffc9$jscomp$0 = document[_0x26e126$jscomp$0(364)](_0x26e126$jscomp$0(215))[_0x26e126$jscomp$0(159)];
    const _0xad31e5$jscomp$0 = document["getElementById"](_0x26e126$jscomp$0(352))[_0x26e126$jscomp$0(159)][_0x26e126$jscomp$0(260)](/\D/g, "");
    const _0x5159aa$jscomp$0 = document[_0x26e126$jscomp$0(364)](_0x26e126$jscomp$0(290))[_0x26e126$jscomp$0(159)];
    return !_0x477df9$jscomp$0 || !_0x20605e$jscomp$0 || !_0x5d58aa$jscomp$0 || !_0x31d02b$jscomp$0 || !_0xa32a07$jscomp$0 || !_0x42c83e$jscomp$0 ? ![] : !![];
  },
  4 : async() => {
    return !![];
  },
  5 : async() => {
    return !![];
  }
};
async function nextShow$jscomp$0() {
  const _0x5f26f1$jscomp$0 = _0xade032$jscomp$0;
  if (!await verifys$jscomp$0[show$jscomp$0]()) {
    document["getElementById"]("warning")[_0x5f26f1$jscomp$0(183)]["remove"](_0x5f26f1$jscomp$0(245));
    document[_0x5f26f1$jscomp$0(364)](_0x5f26f1$jscomp$0(177))["classList"]["add"]("on");
    setTimeout(() => {
      const _0x221205$jscomp$0 = _0x5f26f1$jscomp$0;
      document[_0x221205$jscomp$0(364)]("warning")[_0x221205$jscomp$0(183)]["remove"]("on");
      document[_0x221205$jscomp$0(364)](_0x221205$jscomp$0(177))["classList"]["add"](_0x221205$jscomp$0(245));
    }, 3500);
    return;
  }
  if (show$jscomp$0 === 2) {
    if (document[_0x5f26f1$jscomp$0(364)](_0x5f26f1$jscomp$0(193))[_0x5f26f1$jscomp$0(159)][_0x5f26f1$jscomp$0(260)](/\D/g, "")["length"] !== 11) {
      document["getElementById"](_0x5f26f1$jscomp$0(227))[_0x5f26f1$jscomp$0(183)][_0x5f26f1$jscomp$0(139)](_0x5f26f1$jscomp$0(245));
      document["getElementById"](_0x5f26f1$jscomp$0(227))["classList"][_0x5f26f1$jscomp$0(212)]("on");
      setTimeout(() => {
        const _0x1b0c50$jscomp$0 = _0x5f26f1$jscomp$0;
        document["getElementById"](_0x1b0c50$jscomp$0(227))["classList"][_0x1b0c50$jscomp$0(139)]("on");
        document[_0x1b0c50$jscomp$0(364)](_0x1b0c50$jscomp$0(227))[_0x1b0c50$jscomp$0(183)][_0x1b0c50$jscomp$0(212)](_0x1b0c50$jscomp$0(245));
      }, 3500);
      return;
    }
  }
  if (show$jscomp$0 === 3) {
    if (!validarCPF$jscomp$0(document["getElementById"](_0x5f26f1$jscomp$0(359))[_0x5f26f1$jscomp$0(159)][_0x5f26f1$jscomp$0(260)](/\D/g, "")["toString"]()) && !validarCNPJ$jscomp$0(document["getElementById"](_0x5f26f1$jscomp$0(359))[_0x5f26f1$jscomp$0(159)][_0x5f26f1$jscomp$0(260)](/\D/g, "")["toString"]())) {
      document["getElementById"](_0x5f26f1$jscomp$0(135))[_0x5f26f1$jscomp$0(183)][_0x5f26f1$jscomp$0(139)]("off");
      document["getElementById"](_0x5f26f1$jscomp$0(135))[_0x5f26f1$jscomp$0(183)][_0x5f26f1$jscomp$0(212)]("on");
      setTimeout(() => {
        const _0x322f37$jscomp$0 = _0x5f26f1$jscomp$0;
        document[_0x322f37$jscomp$0(364)](_0x322f37$jscomp$0(135))[_0x322f37$jscomp$0(183)][_0x322f37$jscomp$0(139)]("on");
        document[_0x322f37$jscomp$0(364)](_0x322f37$jscomp$0(135))["classList"][_0x322f37$jscomp$0(212)]("off");
      }, 3500);
      return;
    }
    if (document.getElementById("cep").value !== "") {
        if (document[_0x5f26f1$jscomp$0(364)]("cep")[_0x5f26f1$jscomp$0(159)]["replace"](/\D/g, "")[_0x5f26f1$jscomp$0(288)](".", "")[_0x5f26f1$jscomp$0(288)]("-", "")[_0x5f26f1$jscomp$0(288)]("_", "")[_0x5f26f1$jscomp$0(288)]("/", "")[_0x5f26f1$jscomp$0(292)] !== 8 || document[_0x5f26f1$jscomp$0(364)](_0x5f26f1$jscomp$0(352))["value"][_0x5f26f1$jscomp$0(260)](/\D/g, "")[_0x5f26f1$jscomp$0(288)](".", "")[_0x5f26f1$jscomp$0(288)]("-", "")[_0x5f26f1$jscomp$0(288)]("_", "")[_0x5f26f1$jscomp$0(288)]("/", 
        "") === "") {
          document[_0x5f26f1$jscomp$0(364)](_0x5f26f1$jscomp$0(222))["classList"]["remove"](_0x5f26f1$jscomp$0(245));
          document[_0x5f26f1$jscomp$0(364)](_0x5f26f1$jscomp$0(222))[_0x5f26f1$jscomp$0(183)]["add"]("on");
          setTimeout(() => {
            const _0x255d79$jscomp$0 = _0x5f26f1$jscomp$0;
            document[_0x255d79$jscomp$0(364)](_0x255d79$jscomp$0(222))["classList"][_0x255d79$jscomp$0(139)]("on");
            document[_0x255d79$jscomp$0(364)](_0x255d79$jscomp$0(222))[_0x255d79$jscomp$0(183)][_0x255d79$jscomp$0(212)]("off");
          }, 3500);
          return;
        }
    }
    await sleep$jscomp$0(1);
    formClass$jscomp$0[_0x5f26f1$jscomp$0(344)]();
    await sleep$jscomp$0(1);
    await formClass$jscomp$0["sendForm"]();
    await setConfirmMessage$jscomp$0();
    document[_0x5f26f1$jscomp$0(364)](_0x5f26f1$jscomp$0(194))[_0x5f26f1$jscomp$0(302)]("click", nextShow$jscomp$0);
    document[_0x5f26f1$jscomp$0(364)](_0x5f26f1$jscomp$0(194))[_0x5f26f1$jscomp$0(302)](_0x5f26f1$jscomp$0(165), formClass$jscomp$0[_0x5f26f1$jscomp$0(263)]);
  }
  if (show$jscomp$0 >= 5) {
    return;
  }
  document["getElementById"](_0x5f26f1$jscomp$0(349) + show$jscomp$0)[_0x5f26f1$jscomp$0(244)][_0x5f26f1$jscomp$0(323)] = "none";
  document[_0x5f26f1$jscomp$0(364)]("show-" + show$jscomp$0)[_0x5f26f1$jscomp$0(183)]["remove"]("show");
  document[_0x5f26f1$jscomp$0(364)](_0x5f26f1$jscomp$0(349) + show$jscomp$0)["classList"]["add"](_0x5f26f1$jscomp$0(209));
  show$jscomp$0++;
  document[_0x5f26f1$jscomp$0(364)](_0x5f26f1$jscomp$0(349) + show$jscomp$0)[_0x5f26f1$jscomp$0(244)][_0x5f26f1$jscomp$0(323)] = _0x5f26f1$jscomp$0(217);
  document["getElementById"](_0x5f26f1$jscomp$0(349) + show$jscomp$0)[_0x5f26f1$jscomp$0(183)]["add"]("show");
}
function getDiasMes$jscomp$0(_0x2a192c$jscomp$0, _0x5d957f$jscomp$0) {
  const _0x5cbcb5$jscomp$0 = _0xade032$jscomp$0;
  _0x2a192c$jscomp$0--;
  if (_0x2a192c$jscomp$0 > 11) {
    return ![];
  }
  console[_0x5cbcb5$jscomp$0(360)](_0x2a192c$jscomp$0, _0x5d957f$jscomp$0);
  let _0x199ebe$jscomp$0 = new Date(_0x5d957f$jscomp$0, _0x2a192c$jscomp$0, 1);
  let _0x19d04f$jscomp$0 = {};
  let _0x37b19f$jscomp$0 = [_0x5cbcb5$jscomp$0(231), "Fevereiro", _0x5cbcb5$jscomp$0(201), "Abril", _0x5cbcb5$jscomp$0(213), _0x5cbcb5$jscomp$0(354), _0x5cbcb5$jscomp$0(328), _0x5cbcb5$jscomp$0(305), _0x5cbcb5$jscomp$0(289), _0x5cbcb5$jscomp$0(346), _0x5cbcb5$jscomp$0(316), "Dezembro"];
  for (; _0x199ebe$jscomp$0[_0x5cbcb5$jscomp$0(356)]() === _0x2a192c$jscomp$0;) {
    const _0x4a27dd$jscomp$0 = _0x199ebe$jscomp$0[_0x5cbcb5$jscomp$0(166)]();
    const _0x483273$jscomp$0 = _0x199ebe$jscomp$0[_0x5cbcb5$jscomp$0(356)]() + 1;
    const _0x319767$jscomp$0 = _0x37b19f$jscomp$0[_0x199ebe$jscomp$0[_0x5cbcb5$jscomp$0(356)]()];
    _0x19d04f$jscomp$0[_0x199ebe$jscomp$0[_0x5cbcb5$jscomp$0(166)]()] = {
      "dia" : _0x4a27dd$jscomp$0,
      "mes" : _0x483273$jscomp$0,
      "mesName" : _0x319767$jscomp$0
    };
    _0x199ebe$jscomp$0[_0x5cbcb5$jscomp$0(334)](_0x199ebe$jscomp$0["getDate"]() + 1);
  }
  return _0x19d04f$jscomp$0;
}
async function selectAndShowMes$jscomp$0(_0x35d060$jscomp$0) {
  const _0x1e9e38$jscomp$0 = _0xade032$jscomp$0;
  const _0x524828$jscomp$0 = [];
  daysArrayFirebase$jscomp$0[_0x1e9e38$jscomp$0(345)]((_0x221516$jscomp$0) => {
    const _0x3b2724$jscomp$0 = _0x1e9e38$jscomp$0;
    _0x524828$jscomp$0[_0x3b2724$jscomp$0(307)](_0x221516$jscomp$0);
  });
  const _0x31e21b$jscomp$0 = {
    0 : [],
    1 : [],
    2 : []
  };
  const _0x2fdeca$jscomp$0 = getDiasMes$jscomp$0(parseInt((new Date)[_0x1e9e38$jscomp$0(214)](_0x1e9e38$jscomp$0(240))[_0x1e9e38$jscomp$0(315)]("/")[1]) + _0x35d060$jscomp$0, parseInt((new Date)[_0x1e9e38$jscomp$0(214)](_0x1e9e38$jscomp$0(240))["split"]("/")[2]) + _0x35d060$jscomp$0);
  if (_0x2fdeca$jscomp$0 === ![]) {
    datePosition$jscomp$0--;
    return;
  }
  let _0x11793f$jscomp$0 = [];
  Object["keys"](_0x2fdeca$jscomp$0)[_0x1e9e38$jscomp$0(345)]((_0x2b2ef1$jscomp$0) => {
    const _0x30d9bd$jscomp$0 = _0x1e9e38$jscomp$0;
    _0x11793f$jscomp$0[_0x30d9bd$jscomp$0(307)](_0x2b2ef1$jscomp$0);
  });
  var _0x4c70b6$jscomp$0 = new Headers;
  _0x4c70b6$jscomp$0[_0x1e9e38$jscomp$0(322)](_0x1e9e38$jscomp$0(368), _0x1e9e38$jscomp$0(241));
  _0x4c70b6$jscomp$0[_0x1e9e38$jscomp$0(322)](_0x1e9e38$jscomp$0(239), "*");
  var _0xf06a42$jscomp$0 = {
    "method" : _0x1e9e38$jscomp$0(176),
    "headers" : _0x4c70b6$jscomp$0,
    "redirect" : _0x1e9e38$jscomp$0(140)
  };
  const _0x45f92f$jscomp$0 = await fetch("https://sigdelta.com.br/vitor/api_chamado/ConsultaPrazoAtendimento.php?equipamento=" + document[_0x1e9e38$jscomp$0(364)](_0x1e9e38$jscomp$0(278))[_0x1e9e38$jscomp$0(159)] + _0x1e9e38$jscomp$0(127) + document[_0x1e9e38$jscomp$0(364)]("tipo")["value"], _0xf06a42$jscomp$0);
  const _0x1f9134$jscomp$0 = await _0x45f92f$jscomp$0["json"]();
  console["log"](_0x1f9134$jscomp$0);
  if (_0x1f9134$jscomp$0[_0x1e9e38$jscomp$0(155)] && _0x35d060$jscomp$0 == 0) {
    _0x11793f$jscomp$0 = _0x11793f$jscomp$0[_0x1e9e38$jscomp$0(204)](parseInt(_0x1f9134$jscomp$0[_0x1e9e38$jscomp$0(155)]) - 1);
  }
  document[_0x1e9e38$jscomp$0(364)](_0x1e9e38$jscomp$0(147))[_0x1e9e38$jscomp$0(248)] = "";
  selectedMes$jscomp$0 = _0x2fdeca$jscomp$0["1"][_0x1e9e38$jscomp$0(198)];
  selectedMesNumber$jscomp$0 = _0x2fdeca$jscomp$0["1"][_0x1e9e38$jscomp$0(136)];
  document["getElementById"](_0x1e9e38$jscomp$0(136))[_0x1e9e38$jscomp$0(248)] = selectedMes$jscomp$0;
  if (selectedMesNumber$jscomp$0 == (new Date)[_0x1e9e38$jscomp$0(214)](_0x1e9e38$jscomp$0(240))["split"]("/")[1]) {
    _0x11793f$jscomp$0 = _0x11793f$jscomp$0[_0x1e9e38$jscomp$0(204)](parseInt((new Date)["toLocaleDateString"](_0x1e9e38$jscomp$0(240))[_0x1e9e38$jscomp$0(315)]("/")[0]) + 1, undefined);
  }
  daysId$jscomp$0 = {};
  let _0x2a9da0$jscomp$0 = {
    [parseInt((new Date)[_0x1e9e38$jscomp$0(214)](_0x1e9e38$jscomp$0(240))[_0x1e9e38$jscomp$0(315)]("/")[1])]:0,
    [parseInt((new Date)[_0x1e9e38$jscomp$0(214)](_0x1e9e38$jscomp$0(240))["split"]("/")[1]) + 1]:1,
    [parseInt((new Date)[_0x1e9e38$jscomp$0(214)](_0x1e9e38$jscomp$0(240))[_0x1e9e38$jscomp$0(315)]("/")[1]) + 2]:2
  };
  _0x524828$jscomp$0[_0x1e9e38$jscomp$0(345)]((_0x14f522$jscomp$0) => {
    const _0x3ee6cc$jscomp$0 = _0x1e9e38$jscomp$0;
    if (_0x14f522$jscomp$0["turnos"][_0x3ee6cc$jscomp$0(292)] > 2) {
      _0x31e21b$jscomp$0[_0x2a9da0$jscomp$0[_0x14f522$jscomp$0["data"][_0x3ee6cc$jscomp$0(315)]("-")[1]]][_0x3ee6cc$jscomp$0(307)](_0x14f522$jscomp$0[_0x3ee6cc$jscomp$0(297)]["split"]("-")[2]);
    }
    daysId$jscomp$0[_0x14f522$jscomp$0[_0x3ee6cc$jscomp$0(297)][_0x3ee6cc$jscomp$0(315)]("-")[2] + "/" + _0x14f522$jscomp$0[_0x3ee6cc$jscomp$0(297)]["split"]("-")[1]] = _0x14f522$jscomp$0["id"];
  });
  if (_0x11793f$jscomp$0[_0x1e9e38$jscomp$0(292)] <= 0) {
    return document["getElementById"](_0x1e9e38$jscomp$0(301))[_0x1e9e38$jscomp$0(244)]["display"] = _0x1e9e38$jscomp$0(252), _0x2fdeca$jscomp$0;
  } else {
    document["getElementById"]("warning-data")[_0x1e9e38$jscomp$0(244)][_0x1e9e38$jscomp$0(323)] = _0x1e9e38$jscomp$0(172);
  }
  _0x11793f$jscomp$0[_0x1e9e38$jscomp$0(345)]((_0x24be53$jscomp$0) => {
    const _0x5653ca$jscomp$0 = _0x1e9e38$jscomp$0;
    if (_0x31e21b$jscomp$0[datePosition$jscomp$0][_0x5653ca$jscomp$0(333)](_0x24be53$jscomp$0)) {
      document[_0x5653ca$jscomp$0(364)]("data-grid-container-id")[_0x5653ca$jscomp$0(248)] += _0x5653ca$jscomp$0(125) + _0x24be53$jscomp$0 + _0x5653ca$jscomp$0(126);
    } else {
      document[_0x5653ca$jscomp$0(364)](_0x5653ca$jscomp$0(147))[_0x5653ca$jscomp$0(248)] += _0x5653ca$jscomp$0(181) + _0x24be53$jscomp$0 + "</button>";
    }
  });
  const _0x28b970$jscomp$0 = document[_0x1e9e38$jscomp$0(351)](_0x1e9e38$jscomp$0(203));
  return _0x28b970$jscomp$0[_0x1e9e38$jscomp$0(345)]((_0x40a5c8$jscomp$0) => {
    const _0x5a2cb9$jscomp$0 = _0x1e9e38$jscomp$0;
    _0x40a5c8$jscomp$0[_0x5a2cb9$jscomp$0(302)](_0x5a2cb9$jscomp$0(165), selectDataDay$jscomp$0);
  }), _0x2fdeca$jscomp$0;
}
function nextDatePosition$jscomp$0() {
  if (datePosition$jscomp$0 >= 2) {
    return;
  }
  datePosition$jscomp$0++;
  selectAndShowMes$jscomp$0(datePosition$jscomp$0);
}
function backDatePosition$jscomp$0() {
  if (datePosition$jscomp$0 <= 0) {
    return;
  }
  datePosition$jscomp$0--;
  selectAndShowMes$jscomp$0(datePosition$jscomp$0);
}
async function setConfirmMessage$jscomp$0() {
  const _0xdf4bc6$jscomp$0 = _0xade032$jscomp$0;
  const _0x561e7a$jscomp$0 = finalData$jscomp$0;
  if (document[_0xdf4bc6$jscomp$0(364)](_0xdf4bc6$jscomp$0(168))[_0xdf4bc6$jscomp$0(159)] === _0xdf4bc6$jscomp$0(190)) {
    var _0x11ca5e$jscomp$0 = new Headers;
    _0x11ca5e$jscomp$0["append"]("Authorization", _0xdf4bc6$jscomp$0(241));
    _0x11ca5e$jscomp$0[_0xdf4bc6$jscomp$0(322)](_0xdf4bc6$jscomp$0(239), "*");
    var _0x3b74cd$jscomp$0 = {
      "method" : _0xdf4bc6$jscomp$0(176),
      "headers" : _0x11ca5e$jscomp$0,
      "redirect" : _0xdf4bc6$jscomp$0(140)
    };
    const _0x380a11$jscomp$0 = await fetch(_0xdf4bc6$jscomp$0(311) + _0x561e7a$jscomp$0[_0xdf4bc6$jscomp$0(278)], _0x3b74cd$jscomp$0);
    const _0x59d560$jscomp$0 = await _0x380a11$jscomp$0[_0xdf4bc6$jscomp$0(207)]();
    if (_0x59d560$jscomp$0[_0xdf4bc6$jscomp$0(137)] == 1) {
      document[_0xdf4bc6$jscomp$0(364)]("show-4")[_0xdf4bc6$jscomp$0(248)] = getMsg1$jscomp$0(_0x59d560$jscomp$0[_0xdf4bc6$jscomp$0(348)]);
    } else {
      document[_0xdf4bc6$jscomp$0(364)](_0xdf4bc6$jscomp$0(330))[_0xdf4bc6$jscomp$0(248)] = getMsg2$jscomp$0(_0x59d560$jscomp$0["valor_mao_obra"]);
    }
  } else {
    document[_0xdf4bc6$jscomp$0(364)](_0xdf4bc6$jscomp$0(330))[_0xdf4bc6$jscomp$0(248)] = _0xdf4bc6$jscomp$0(219) + _0x561e7a$jscomp$0["nome"] + _0xdf4bc6$jscomp$0(329) + _0x561e7a$jscomp$0["equipamento"] + _0xdf4bc6$jscomp$0(180) + _0x561e7a$jscomp$0[_0xdf4bc6$jscomp$0(257)] + _0xdf4bc6$jscomp$0(154);
  }
}
function showDataDaysContainer$jscomp$0() {
  const _0x497393$jscomp$0 = _0xade032$jscomp$0;
  selectedDay$jscomp$0 = event["target"][_0x497393$jscomp$0(248)];
  inputsContainer$jscomp$0[_0x497393$jscomp$0(244)][_0x497393$jscomp$0(323)] = _0x497393$jscomp$0(172);
  dateContainer$jscomp$0[_0x497393$jscomp$0(244)]["display"] = _0x497393$jscomp$0(217);
}
async function selectDataDay$jscomp$0() {
  const _0x5026b0$jscomp$0 = _0xade032$jscomp$0;
  selectedDay$jscomp$0 = event["target"][_0x5026b0$jscomp$0(248)];
  const _0x4842dd$jscomp$0 = selectedDay$jscomp$0 < 9 ? "0" + selectedDay$jscomp$0 : selectedDay$jscomp$0;
  let _0x167cf0$jscomp$0 = (new Date)[_0x5026b0$jscomp$0(173)]() + "-" + selectedMesNumber$jscomp$0 + "-" + (selectedDay$jscomp$0 <= 9 ? "0" + selectedDay$jscomp$0 : selectedDay$jscomp$0);
  document["getElementById"](_0x5026b0$jscomp$0(367))[_0x5026b0$jscomp$0(159)] = _0x167cf0$jscomp$0;
  if (!daysId$jscomp$0[_0x4842dd$jscomp$0 + "/" + selectedMesNumber$jscomp$0]) {
    inputsContainer$jscomp$0[_0x5026b0$jscomp$0(244)][_0x5026b0$jscomp$0(323)] = _0x5026b0$jscomp$0(217);
    dateContainer$jscomp$0[_0x5026b0$jscomp$0(244)][_0x5026b0$jscomp$0(323)] = "none";
    document[_0x5026b0$jscomp$0(364)](_0x5026b0$jscomp$0(243))[_0x5026b0$jscomp$0(248)] = "<option value=''>Selecione</option>";
    document[_0x5026b0$jscomp$0(364)]("turno")[_0x5026b0$jscomp$0(248)] += "\n\t\t<option value=manh\u00e3>Manh\u00e3</option>\n\t\t<option value=tarde>Tarde</option>\n\t\t<option value=noite>Noite</option>\n\t\t";
    return;
  }
  const _0x4f7fdf$jscomp$0 = [];
  daysArrayFirebase$jscomp$0[_0x5026b0$jscomp$0(345)]((_0x286fb3$jscomp$0) => {
    const _0x7953f3$jscomp$0 = _0x5026b0$jscomp$0;
    _0x4f7fdf$jscomp$0[_0x7953f3$jscomp$0(307)](_0x286fb3$jscomp$0);
  });
  const _0x3678f6$jscomp$0 = _0x4f7fdf$jscomp$0[_0x5026b0$jscomp$0(326)]((_0x2bab5e$jscomp$0) => {
    return _0x2bab5e$jscomp$0["id"] === daysId$jscomp$0[_0x4842dd$jscomp$0 + "/" + selectedMesNumber$jscomp$0];
  });
  document[_0x5026b0$jscomp$0(364)](_0x5026b0$jscomp$0(243))[_0x5026b0$jscomp$0(248)] = _0x5026b0$jscomp$0(258);
  const _0x275a49$jscomp$0 = [_0x5026b0$jscomp$0(335), _0x5026b0$jscomp$0(286), _0x5026b0$jscomp$0(238)];
  const _0x542ca2$jscomp$0 = _0x275a49$jscomp$0["filter"]((_0x1246b8$jscomp$0) => {
    return !_0x3678f6$jscomp$0["turnos"][_0x5026b0$jscomp$0(333)](_0x1246b8$jscomp$0);
  });
  console[_0x5026b0$jscomp$0(360)]("Selec - turnos " + _0x3678f6$jscomp$0[_0x5026b0$jscomp$0(233)]);
  console["log"](_0x542ca2$jscomp$0);
  _0x542ca2$jscomp$0["forEach"]((_0x1ca53d$jscomp$0) => {
    const _0x2c2f32$jscomp$0 = _0x5026b0$jscomp$0;
    document[_0x2c2f32$jscomp$0(364)]("turno")[_0x2c2f32$jscomp$0(248)] += _0x2c2f32$jscomp$0(249) + _0x1ca53d$jscomp$0 + ">" + (_0x1ca53d$jscomp$0[0][_0x2c2f32$jscomp$0(132)]() + _0x1ca53d$jscomp$0[_0x2c2f32$jscomp$0(357)](1)) + _0x2c2f32$jscomp$0(149);
  });
  inputsContainer$jscomp$0[_0x5026b0$jscomp$0(244)][_0x5026b0$jscomp$0(323)] = _0x5026b0$jscomp$0(217);
  dateContainer$jscomp$0[_0x5026b0$jscomp$0(244)]["display"] = "none";
}
async function getAllApiData$jscomp$0() {
  const _0x53e927$jscomp$0 = _0xade032$jscomp$0;
  var _0x249dcb$jscomp$0 = new Headers;
  _0x249dcb$jscomp$0[_0x53e927$jscomp$0(322)](_0x53e927$jscomp$0(368), _0x53e927$jscomp$0(241));
  _0x249dcb$jscomp$0[_0x53e927$jscomp$0(322)](_0x53e927$jscomp$0(239), "*");
  var _0x46c5d7$jscomp$0 = {
    "method" : _0x53e927$jscomp$0(176),
    "headers" : _0x249dcb$jscomp$0,
    "redirect" : _0x53e927$jscomp$0(140)
  };
  const _0x164171$jscomp$0 = await fetch(_0x53e927$jscomp$0(229), _0x46c5d7$jscomp$0);
  const _0xb19edd$jscomp$0 = await fetch("https://sigdelta.com.br/vitor/api_chamado/ConsultaMarcas.php", _0x46c5d7$jscomp$0);
  const _0x38bfa8$jscomp$0 = await _0x164171$jscomp$0[_0x53e927$jscomp$0(207)]();
  const _0x230f21$jscomp$0 = await _0xb19edd$jscomp$0[_0x53e927$jscomp$0(207)]();
  apiData$jscomp$0[_0x53e927$jscomp$0(282)] = _0x38bfa8$jscomp$0;
  apiData$jscomp$0["marcas"] = _0x230f21$jscomp$0;
}
selectAndShowMes$jscomp$0(datePosition$jscomp$0), nextMesBtn$jscomp$0[_0xade032$jscomp$0(302)]("click", nextDatePosition$jscomp$0), backMesBtn$jscomp$0[_0xade032$jscomp$0(302)](_0xade032$jscomp$0(165), backDatePosition$jscomp$0);
function validarCPF$jscomp$0(_0x2cfd8e$jscomp$0) {
  const _0x330e68$jscomp$0 = _0xade032$jscomp$0;
  _0x2cfd8e$jscomp$0 = _0x2cfd8e$jscomp$0[_0x330e68$jscomp$0(260)](/[^\d]+/g, "");
  if (_0x2cfd8e$jscomp$0 == "") {
    return ![];
  }
  if (_0x2cfd8e$jscomp$0["length"] != 11 || _0x2cfd8e$jscomp$0 == _0x330e68$jscomp$0(271) || _0x2cfd8e$jscomp$0 == _0x330e68$jscomp$0(314) || _0x2cfd8e$jscomp$0 == _0x330e68$jscomp$0(230) || _0x2cfd8e$jscomp$0 == _0x330e68$jscomp$0(234) || _0x2cfd8e$jscomp$0 == "44444444444" || _0x2cfd8e$jscomp$0 == _0x330e68$jscomp$0(124) || _0x2cfd8e$jscomp$0 == _0x330e68$jscomp$0(185) || _0x2cfd8e$jscomp$0 == "77777777777" || _0x2cfd8e$jscomp$0 == _0x330e68$jscomp$0(153) || _0x2cfd8e$jscomp$0 == "99999999999") {
    return ![];
  }
  let _0x105323$jscomp$0 = 0;
  for (let _0x576a5a$jscomp$0 = 0; _0x576a5a$jscomp$0 < 9; _0x576a5a$jscomp$0++) {
    _0x105323$jscomp$0 = _0x105323$jscomp$0 + parseInt(_0x2cfd8e$jscomp$0[_0x330e68$jscomp$0(208)](_0x576a5a$jscomp$0)) * (10 - _0x576a5a$jscomp$0);
  }
  let _0x4ab292$jscomp$0 = 11 - _0x105323$jscomp$0 % 11;
  if (_0x4ab292$jscomp$0 == 10 || _0x4ab292$jscomp$0 == 11) {
    _0x4ab292$jscomp$0 = 0;
  }
  if (_0x4ab292$jscomp$0 != parseInt(_0x2cfd8e$jscomp$0[_0x330e68$jscomp$0(208)](9))) {
    return ![];
  }
  _0x105323$jscomp$0 = 0;
  for (let _0xab847d$jscomp$0 = 0; _0xab847d$jscomp$0 < 10; _0xab847d$jscomp$0++) {
    _0x105323$jscomp$0 = _0x105323$jscomp$0 + parseInt(_0x2cfd8e$jscomp$0[_0x330e68$jscomp$0(208)](_0xab847d$jscomp$0)) * (11 - _0xab847d$jscomp$0);
  }
  _0x4ab292$jscomp$0 = 11 - _0x105323$jscomp$0 % 11;
  if (_0x4ab292$jscomp$0 == 10 || _0x4ab292$jscomp$0 == 11) {
    _0x4ab292$jscomp$0 = 0;
  }
  if (_0x4ab292$jscomp$0 != parseInt(_0x2cfd8e$jscomp$0["charAt"](10))) {
    return ![];
  }
  return !![];
}
function validarCNPJ$jscomp$0(_0x204003$jscomp$0) {
  const _0x236398$jscomp$0 = _0xade032$jscomp$0;
  _0x204003$jscomp$0 = _0x204003$jscomp$0["replace"](/[^\d]+/g, "");
  if (_0x204003$jscomp$0 == "") {
    return ![];
  }
  if (_0x204003$jscomp$0[_0x236398$jscomp$0(292)] != 14) {
    return ![];
  }
  if (_0x204003$jscomp$0 == "00000000000000" || _0x204003$jscomp$0 == "11111111111111" || _0x204003$jscomp$0 == "22222222222222" || _0x204003$jscomp$0 == _0x236398$jscomp$0(262) || _0x204003$jscomp$0 == _0x236398$jscomp$0(143) || _0x204003$jscomp$0 == _0x236398$jscomp$0(332) || _0x204003$jscomp$0 == _0x236398$jscomp$0(275) || _0x204003$jscomp$0 == _0x236398$jscomp$0(150) || _0x204003$jscomp$0 == _0x236398$jscomp$0(200) || _0x204003$jscomp$0 == "99999999999999") {
    return ![];
  }
  let _0x2410cf$jscomp$0 = _0x204003$jscomp$0[_0x236398$jscomp$0(292)] - 2;
  let _0x48d520$jscomp$0 = _0x204003$jscomp$0[_0x236398$jscomp$0(357)](0, _0x2410cf$jscomp$0);
  let _0xd3fcc$jscomp$0 = _0x204003$jscomp$0["substring"](_0x2410cf$jscomp$0);
  let _0x1485b6$jscomp$0 = 0;
  let _0x61aa6e$jscomp$0 = _0x2410cf$jscomp$0 - 7;
  for (let _0x369783$jscomp$0 = _0x2410cf$jscomp$0; _0x369783$jscomp$0 >= 1; _0x369783$jscomp$0--) {
    _0x1485b6$jscomp$0 = _0x1485b6$jscomp$0 + _0x48d520$jscomp$0[_0x236398$jscomp$0(208)](_0x2410cf$jscomp$0 - _0x369783$jscomp$0) * _0x61aa6e$jscomp$0--;
    if (_0x61aa6e$jscomp$0 < 2) {
      _0x61aa6e$jscomp$0 = 9;
    }
  }
  let _0x2fcefd$jscomp$0 = _0x1485b6$jscomp$0 % 11 < 2 ? 0 : 11 - _0x1485b6$jscomp$0 % 11;
  if (_0x2fcefd$jscomp$0 != _0xd3fcc$jscomp$0[_0x236398$jscomp$0(208)](0)) {
    return ![];
  }
  _0x2410cf$jscomp$0 = _0x2410cf$jscomp$0 + 1;
  _0x48d520$jscomp$0 = _0x204003$jscomp$0[_0x236398$jscomp$0(357)](0, _0x2410cf$jscomp$0);
  _0x1485b6$jscomp$0 = 0;
  _0x61aa6e$jscomp$0 = _0x2410cf$jscomp$0 - 7;
  for (let _0x7a221c$jscomp$0 = _0x2410cf$jscomp$0; _0x7a221c$jscomp$0 >= 1; _0x7a221c$jscomp$0--) {
    _0x1485b6$jscomp$0 = _0x1485b6$jscomp$0 + _0x48d520$jscomp$0[_0x236398$jscomp$0(208)](_0x2410cf$jscomp$0 - _0x7a221c$jscomp$0) * _0x61aa6e$jscomp$0--;
    if (_0x61aa6e$jscomp$0 < 2) {
      _0x61aa6e$jscomp$0 = 9;
    }
  }
  _0x2fcefd$jscomp$0 = _0x1485b6$jscomp$0 % 11 < 2 ? 0 : 11 - _0x1485b6$jscomp$0 % 11;
  if (_0x2fcefd$jscomp$0 != _0xd3fcc$jscomp$0[_0x236398$jscomp$0(208)](1)) {
    return ![];
  }
  return !![];
}
async function searchByCep$jscomp$0() {
  const _0x154c15$jscomp$0 = _0xade032$jscomp$0;
  const _0xb07ee9$jscomp$0 = document[_0x154c15$jscomp$0(364)](_0x154c15$jscomp$0(352))["value"][_0x154c15$jscomp$0(260)](/\D/g, "");
  fetch(_0x154c15$jscomp$0(256) + _0xb07ee9$jscomp$0 + _0x154c15$jscomp$0(218), {
    "method" : _0x154c15$jscomp$0(176)
  })[_0x154c15$jscomp$0(220)](async(_0x57e770$jscomp$0) => {
    const _0x6f1198$jscomp$0 = _0x154c15$jscomp$0;
    if (_0x57e770$jscomp$0[_0x6f1198$jscomp$0(171)] !== 200 && _0x57e770$jscomp$0[_0x6f1198$jscomp$0(171)] !== 201) {
      return;
    }
    _0x57e770$jscomp$0 = await _0x57e770$jscomp$0["json"]();
    if (_0x57e770$jscomp$0[_0x6f1198$jscomp$0(161)]) {
      return;
    }
    document[_0x6f1198$jscomp$0(364)]("cidade")["value"] = _0x57e770$jscomp$0[_0x6f1198$jscomp$0(237)];
    document["getElementById"](_0x6f1198$jscomp$0(186))[_0x6f1198$jscomp$0(159)] = _0x57e770$jscomp$0[_0x6f1198$jscomp$0(186)];
    document[_0x6f1198$jscomp$0(364)](_0x6f1198$jscomp$0(187))[_0x6f1198$jscomp$0(159)] = _0x57e770$jscomp$0[_0x6f1198$jscomp$0(192)];
    document[_0x6f1198$jscomp$0(364)](_0x6f1198$jscomp$0(215))[_0x6f1198$jscomp$0(159)] = _0x57e770$jscomp$0[_0x6f1198$jscomp$0(215)];
  });
}
document[_0xade032$jscomp$0(364)](_0xade032$jscomp$0(352))[_0xade032$jscomp$0(302)]("change", searchByCep$jscomp$0);
const init$jscomp$1 = async() => {
  const _0x1b84e1$jscomp$0 = _0xade032$jscomp$0;
  const _0x4670f3$jscomp$0 = [_0x1b84e1$jscomp$0(325), _0x1b84e1$jscomp$0(291), _0x1b84e1$jscomp$0(164), _0x1b84e1$jscomp$0(310), _0x1b84e1$jscomp$0(158), "MAQUINA DE LAVAR", "SEM EQUIPAMENTO", _0x1b84e1$jscomp$0(272), _0x1b84e1$jscomp$0(372), _0x1b84e1$jscomp$0(299), "AUTOCLAVE", _0x1b84e1$jscomp$0(317), _0x1b84e1$jscomp$0(265), _0x1b84e1$jscomp$0(319), _0x1b84e1$jscomp$0(309), _0x1b84e1$jscomp$0(313), _0x1b84e1$jscomp$0(179), _0x1b84e1$jscomp$0(375), _0x1b84e1$jscomp$0(270), "GELADEIRA 1 PORTA FROST FREE"];
  const _0x35a04a$jscomp$0 = ["SAMSUNG", "LG", "ELECTROLUX", _0x1b84e1$jscomp$0(341), _0x1b84e1$jscomp$0(355), "BRASTEMP", _0x1b84e1$jscomp$0(365), "KOMECO", _0x1b84e1$jscomp$0(144), _0x1b84e1$jscomp$0(174), _0x1b84e1$jscomp$0(157), _0x1b84e1$jscomp$0(148), _0x1b84e1$jscomp$0(298), _0x1b84e1$jscomp$0(306), _0x1b84e1$jscomp$0(236), _0x1b84e1$jscomp$0(361), _0x1b84e1$jscomp$0(269), _0x1b84e1$jscomp$0(347), _0x1b84e1$jscomp$0(162), "LORENZETTI"];
  await getAllApiData$jscomp$0();
  const _0x29498b$jscomp$0 = apiData$jscomp$0["equipamentos"][_0x1b84e1$jscomp$0(250)]((_0x4ff09d$jscomp$0) => {
    return !_0x4670f3$jscomp$0[_0x1b84e1$jscomp$0(333)](_0x4ff09d$jscomp$0["equipamento"][_0x1b84e1$jscomp$0(358)]());
  });
  const _0x404598$jscomp$0 = apiData$jscomp$0[_0x1b84e1$jscomp$0(210)][_0x1b84e1$jscomp$0(250)]((_0x26c53e$jscomp$0) => {
    return !_0x35a04a$jscomp$0[_0x1b84e1$jscomp$0(333)](_0x26c53e$jscomp$0);
  });
  _0x4670f3$jscomp$0[_0x1b84e1$jscomp$0(320)]();
  _0x35a04a$jscomp$0[_0x1b84e1$jscomp$0(320)]();
  _0x4670f3$jscomp$0[_0x1b84e1$jscomp$0(345)]((_0xcd5cd1$jscomp$0) => {
    const _0xcb30c9$jscomp$0 = _0x1b84e1$jscomp$0;
    const _0x510c67$jscomp$0 = apiData$jscomp$0[_0xcb30c9$jscomp$0(282)][_0xcb30c9$jscomp$0(326)]((_0x38e2e0$jscomp$0) => {
      return _0x38e2e0$jscomp$0[_0xcb30c9$jscomp$0(278)][_0xcb30c9$jscomp$0(358)]() === _0xcd5cd1$jscomp$0[_0xcb30c9$jscomp$0(358)]();
    });
    if (!_0x510c67$jscomp$0) {
      _0x29498b$jscomp$0[_0xcb30c9$jscomp$0(337)]({
        "equipamento" : _0xcd5cd1$jscomp$0[_0xcb30c9$jscomp$0(358)]()
      });
      return;
    } else {
      _0x510c67$jscomp$0["equipamento"] = _0x510c67$jscomp$0[_0xcb30c9$jscomp$0(278)][_0xcb30c9$jscomp$0(358)]();
      _0x29498b$jscomp$0[_0xcb30c9$jscomp$0(337)](_0x510c67$jscomp$0);
    }
  });
  _0x35a04a$jscomp$0["forEach"]((_0x463c02$jscomp$0) => {
    const _0x512317$jscomp$0 = _0x1b84e1$jscomp$0;
    _0x404598$jscomp$0[_0x512317$jscomp$0(337)](_0x463c02$jscomp$0);
  });
  document[_0x1b84e1$jscomp$0(364)](_0x1b84e1$jscomp$0(129))[_0x1b84e1$jscomp$0(248)] = "";
  _0x29498b$jscomp$0[_0x1b84e1$jscomp$0(345)]((_0x2c7ba9$jscomp$0) => {
    const _0xdeac00$jscomp$0 = _0x1b84e1$jscomp$0;
    document[_0xdeac00$jscomp$0(364)](_0xdeac00$jscomp$0(129))[_0xdeac00$jscomp$0(248)] += _0xdeac00$jscomp$0(266) + _0x2c7ba9$jscomp$0[_0xdeac00$jscomp$0(278)] + '">\n\t\t\t' + _0x2c7ba9$jscomp$0[_0xdeac00$jscomp$0(278)] + _0xdeac00$jscomp$0(145);
  });
  _0x404598$jscomp$0["forEach"]((_0x248e16$jscomp$0) => {
    const _0x5494ea$jscomp$0 = _0x1b84e1$jscomp$0;
    document["getElementById"]("marca-datalist")[_0x5494ea$jscomp$0(248)] += _0x5494ea$jscomp$0(266) + _0x248e16$jscomp$0 + _0x5494ea$jscomp$0(343) + _0x248e16$jscomp$0 + _0x5494ea$jscomp$0(145);
  });
};
init$jscomp$1();
function sleep$jscomp$0(_0x50a86f$jscomp$0) {
  return new Promise((_0x4af01f$jscomp$0) => {
    return setTimeout(_0x4af01f$jscomp$0, _0x50a86f$jscomp$0);
  });
}
function getMsg1$jscomp$0(_0x5c4f54$jscomp$0) {
  const _0x13ffad$jscomp$0 = _0xade032$jscomp$0;
  return '\n\t\t<div>\n\t\t<h2 class="grid-sub-title">\n\t\t\tConfirma\u00e7\u00e3o\n\t\t</h2>\n\t</div>\n\t<section class="input-container-no-border flex-container">\n        <span style="font-weight: bold; font-size: 23px;">\n\t\t\tVou lhe explicar nossa forma de trabalho\n\t\t</span>\n\t\t<span>\n\t\t\tVamos at\u00e9 o local e  fazemos uma avalia\u00e7\u00e3o de seu equipamento\n\t\t\t<strong>RESSALTAMOS QUE CONFORME NECESSIDADE IREMOS RECOLHER SEU EQUIPAMENTO PARA NOSSO LABORAT\u00d3RIO ONDE CONTAMOS COM UMA ESTRUTURA MAIS ADEQUADA PARA ASSISTENCIA E ASSIM REALIZAMOS O REPARO COM MAIS QUALIDADE E AGILIDADE</strong>\n\t\t\tImportante dizer que o Custo de mao de obra e deslocamento sendo feito no cliente ou recolhendo \u00e9 sempre o mesmo.\n\t\t</span>\n\t\t<section class="flex-container-1">\n\t\t\t<span  style="font-weight: bold;">\n\t\t\t\tValores\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\tNossa avalia\u00e7\u00e3o \u00e9 composta por M\u00e3o de Obra , Deslocamento e Pe\u00e7as (caso for necess\u00e1rio)\n\t\t\t\tm\u00e3o de obra de <strong>R$' + 
  _0x5c4f54$jscomp$0 + _0x13ffad$jscomp$0(259) + _0x5c4f54$jscomp$0 + '</strong>\n\t\t\t\tdeslocamento de <strong>R$35,00</strong> <strong>paga somente uma vez</strong>\n\t\t\t\tpe\u00e7as ( se for necess\u00e1rio, e ser\u00e1 or\u00e7ado antes )\n\t\t\t</span>\n\t\t\t<span  style="font-weight: bold;">\n\t\t\t\tSE O CLIENTE N\u00c3O FIZER O SERVI\u00c7O:\n\t\t\t</span>\n\t\t\t<span>\n\t\t\t\tNesse caso cliente ter\u00e1 os seguintes custos\n\t\t\t\tm\u00e3o de obra de <strong>>R$' + _0x5c4f54$jscomp$0 + 
  _0x13ffad$jscomp$0(280);
}
function getMsg2$jscomp$0(_0x2f6643$jscomp$0) {
  const _0x53d2f2$jscomp$0 = _0xade032$jscomp$0;
  return _0x53d2f2$jscomp$0(189) + _0x2f6643$jscomp$0 + _0x53d2f2$jscomp$0(304) + _0x2f6643$jscomp$0 + _0x53d2f2$jscomp$0(273) + _0x2f6643$jscomp$0 + _0x53d2f2$jscomp$0(362);
}
;