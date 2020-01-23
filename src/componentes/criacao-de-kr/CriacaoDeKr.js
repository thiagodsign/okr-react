import React from 'react'

export default class CriacaoDeKr extends React.Component {
  constructor(props) {
    super(props);
    this.nomeDoObjetivo = 'Objetivo'
    this.nomeDaKr = 'Kr'
    this.valorInicialDaKr = 0
    this.valorAtualDaKr = 0
    this.valorFinalDaKr = 50
  }

  render() {
    return (
      <div className="dialogo" id="dialogoKr">
        <div className="dialogo__corpo">
          <h2 className="titulo" name="tituloDoObjetivo">{this.nomeDoObjetivo}</h2>

          <form className="formulario">
            <label htmlFor="inputKr">Insira o nome da sua Key Result</label>
            <input type="text" id="inputKr" value={this.nomeDaKr} />

            <label htmlFor="valorInicial">Valor inicial</label>
            <input type="number" id="valorInicial" value={this.valorInicialDaKr} />

            <label htmlFor="valorFinal">Valor Final</label>
            <input type="number" id="valorFinal" value={this.valorFinalDaKr} />

            <label htmlFor="valorAtual">Valor Atual</label>
            <input type="number" id="valorAtual" value={this.valorAtualDaKr} />
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
