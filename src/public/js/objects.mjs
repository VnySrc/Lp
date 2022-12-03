export function getMsg1 (valor) {
    return (
        `
        <div>
		<h2 class="grid-sub-title">
			Confirmação
		</h2>
	</div>
	
	<section class="input-container-no-border flex-container">
		<span style="font-weight: bold;">
            Vou lhe explicar nossa forma de trabalho
		</span>
		<span>
            Vamos até o local e  fazemos uma avaliação de seu equipamento
			<strong>RESSALTAMOS QUE CONFORME NECESSIDADE IREMOS RECOLHER SEU EQUIPAMENTO PARA NOSSO LABORATÓRIO ONDE CONTAMOS COM UMA ESTRUTURA MAIS ADEQUADA PARA ASSISTENCIA E ASSIM REALIZAMOS O REPARO COM MAIS QUALIDADE E AGILIDADE</strong>
            Importante dizer que o Custo de mao de obra e deslocamento sendo feito no cliente ou recolhendo é sempre o mesmo.
		</span>
		<section class="flex-container-1">
			<span  style="font-weight: bold;">
				Valores
			</span>
            <span>
                Nossa avaliação é composta por Mão de Obra , Deslocamento e Peças (caso for necessário)
                mão de obra de <strong>R$${valor}</strong>
                deslocamento <strong>R$35,00</strong> <strong>paga somente uma vez</strong>
            </span>
			<span  style="font-weight: bold;">
                SE O CLIENTE FIZER O SERVIÇO:
			</span>
            <span>
                Nesse caso cliente terá os seguintes custos
                mão de obra de  <strong>R$${valor}</strong>
                deslocamento de <strong>R$35,00</strong> <strong>paga somente uma vez</strong>
                peças ( se for necessário, e será orçado antes )
            </span>
            <span  style="font-weight: bold;">
                SE O CLIENTE NÃO FIZER O SERVIÇO:
			</span>
            <span>
                Nesse caso cliente terá os seguintes custos
                mão de obra de <strong>>R$${valor}</strong>
                deslocamento <strong>R$35,00</strong> <strong>paga somente uma vez</strong>
            </span>
		</section>
	</section>
	<section class="input-container-no-border">
		<button id="action-btn-4" class="action-btns">Finalizar</button>
	</section>
        `
    )
}

export function getMsg2 (valor) {
    return (
        `
        <div>
        <h2 class="grid-sub-title">
            Confirmação
        </h2>
        </div>
        <section class="input-container-no-border flex-container">
        <span style="font-weight: bold;">
            Vou lhe explicar nossa forma de trabalho
        </span>
        <span>
            Vamos até o local e  fazemos uma avaliação de seu equipamento
            90% dos casos, nossos técnicos resolvem no local sem a necessidade de recolher o equipamento
            <strong>Importante dizer que o Custo de mao de obra e deslocamento sendo feito no cliente ou recolhendo é sempre o mesmo</strong>
        </span>
        <section class="flex-container-1">
            <span  style="font-weight: bold;">
                Valores
            </span>
            <span>
                Nossa avaliação é composta por Mão de Obra , Deslocamento e Peças (caso for necessário)
                mão de obra de <strong>R$${valor}</strong>
                deslocamento <strong>R$35,00</strong> <strong>paga somente uma vez</strong>
            </span>
            <span  style="font-weight: bold;">
                SE O CLIENTE FIZER O SERVIÇO:
            </span>
            <span>
                Nesse caso cliente terá os seguintes custos
                mão de obra de <strong>R$${valor}</strong>
                deslocamento <strong>R$35,00</strong> <strong>paga somente uma vez</strong>
                peças ( <strong>se for necessário, e será orçado antes</strong> )
            </span>
            <span  style="font-weight: bold;">
                SE O CLIENTE NÃO FIZER O SERVIÇO:
            </span>
            <span>
            Nesse caso cliente terá os seguintes custos
            mão de obra de <strong>R$${valor}</strong>
            deslocamento <strong>R$35,00</strong> <strong>paga somente uma vez</strong>
            </span>
        </section>
        </section>
        <section class="input-container-no-border">
        <button id="action-btn-4" class="action-btns">Finalizar</button>
        </section>
        `
    )
}


export async function sendAgendamentos (data) {
    return fetch("/agendamentos", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export async function getAgendamentos (offset, limit) {
    const response = await fetch(`/agendamentos?offset=${offset}&limit=${limit}`, {
        method: "GET",
    })
    const responseJson = await response.json()
    return responseJson
}

export async function getAgendamentosById (id) {
    const response = await fetch(`/agendamentos/${id}`, {
        method: "GET",
    })
    const responseJson = await response.json()
    return responseJson
}


