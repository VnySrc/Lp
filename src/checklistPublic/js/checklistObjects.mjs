export const getArInputs = (number) => {
    return (
        `
        <h3 class="inputs-sub-container-title">Dados AR ${number+1}</h3>
        <div class="inputs-sub-container ar-container-identfier" id="aparelhos-container" id="ar-container"> <!-- Input sub container start -->
          <section class="input-section">
            <label for="">Marca</label>
            <input type="text" list="brand-datalist" id="marca" placeholder="Marca equipamento">
            <datalist id="brand-datalist" class="brand-datalist">
            </datalist>
          </section>
          <section class="input-section">
            <label for="">Btus</label>
            <input type="number" name="" id="btus" placeholder="Btus equipamento">
          </section>
          <section class="input-section">
            <label for="">Compressor</label>
            <select id="compressor">  
              <option value="">Selecione</option>
              <option value="inverter">Inverter</option>
              <option value="convencional">Convencional</option>
            </select>
          </section>
          </section>
          <section class="input-section">
            <label for="">Condensador</label>
            <select id="condensador">  
              <option value="">Selecione</option>
              <option value="horizontal">Horizontal</option>
              <option value="vertical">Vertical</option>
            </select>
          </section>
        </div>
        `
    )
}

export const checkboxData = {
  tubulação : `
  <h3 class="grid-title">Tubulação cobre</h3>
  <section class="grid-section">
    <label for="">Quantos metros de tubulação precisa?</label>
    <input type="number" name="" id="tubulação-metros" placeholder="Metros">
  </section>
  `,
  dreno: `
  <h3 class="grid-title">Dreno externo</h3>
          <section class="grid-section">
            <label for="">Selecione o tipo</label>
            <select name="" id="dreno-tipo">
              <option value="">Selecione</option>
              <option value="mangueira-preta">Mangueira preta</option>
              <option value="mangueira-cristal">Mangueira cristal</option>
              <option value="dreno-pvc">Dreno pvc</option>
            </select>
            <input type="text" name="" id="dreno-quantidade" placeholder="Quantidade">
          </section>
  `,
  canaletas: `
  <h3 class="grid-title">Canaletas</h3>
  <section class="grid-section">
    <label for="">Quantos metros de tubulação precisa?</label>
    <input type="number" name="" id="CB30-METROS" placeholder="CB30 QUANTOS METROS?">
    <input type="number" name="" id="CB30-TERMINAL" placeholder="QUANTOS TERMINAL?">
    <input type="number" name="" id="CB30-CURVAS" placeholder="QUANTAS CURVAS?">
    <input type="number" name="" id="CB60-METROS" placeholder="CB60 QUANTOS METROS?">
    <input type="number" name="" id="CB60-TERMINAL" placeholder=" QUANTOS TERMINAL?">
    <input type="number" name="" id="CB60-CURVAS" placeholder="QUANTAS CURVAS?">
    <input type="number" name="" id="CB80-METROS" placeholder="CB80 QUANTOS METROS?">
    <input type="number" name="" id="CB80-TERMINAL" placeholder=" QUANTOS TERMINAL?">
    <input type="number" name="" id="CB80-CURVAS" placeholder="QUANTAS CURVAS?">
  </section>
  `,
  ponto_força : `
  <h3 class="grid-title">Ponto de Força</h3>
          <section class="grid-section">
            <label for="">Descreva</label>
            <textarea type="text" name="" id="ponto_força-descr" placeholder="Descreva..."></textarea>
          </section>
  `
} 

export async function sendAgendamentos (data) {
  return fetch("/pdfs", {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
}

export async function getAgendamentos (offset, limit) {
  const response = await fetch(`/pdfs`, {
      method: "GET",
  })
  const responseJson = await response.json()
  return responseJson
}

export async function getAgendamentosById (id) {
  const response = await fetch(`/pdfs/${id}`, {
      method: "GET",
  })
  const responseJson = await response.json()
  return responseJson
}