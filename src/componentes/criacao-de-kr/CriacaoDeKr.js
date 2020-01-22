import React from 'react'

export default class CriacaoDeKr extends React.Component {
  render() {
    return (
      <div className="dialogo" id="dialogoKr">
        <div className="dialogo__corpo">
          <h2 className="titulo" name="tituloDoObjetivo">Nome do objetivo</h2>

          <form className="formulario">
            <label htmlFor="inputKr">Insira o nome da sua Key Result</label>
            <input type="text" id="inputKr" />

            <label htmlFor="valorInicial">Valor inicial</label>
            <input type="number" id="valorInicial" />

            <label htmlFor="valorFinal">Valor Final</label>
            <input type="number" id="valorFinal" />

            <label htmlFor="valorAtual">Valor Atual</label>
            <input type="number" id="valorAtual" />
          </form>
        </div>


        <div className="dialogo__rodape">
          <button type="button" className="botao botao_branco botao_com-icone"
          >
            <i data-feather="x"></i>
            Cancelar
            </button>

          <button type="button" className="botao botao_com-icone">
            <i data-feather="save"></i>
            Salvar KR
            </button>
        </div>
      </div>
    )
  }
}
