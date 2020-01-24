import React from 'react'
import Botao from '../botao/Botao'

export default class CriacaoDeObjetivo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quarters: {},
    }
  }

  componentDidMount() {
    window.firebase.database().ref('/').once('value').then((snapshot) => {
      this.setState({ quarters: (snapshot.val() && snapshot.val()) })
      console.log(this.state.quarters)
    })
  }

  fecharDialogo(id) {
    document.getElementById(id).classList.remove('dialogo_aberto')
  }

  criarDados() {
    const path = 'quarters/';
    const dadosQuarter = {
      ano: 2020,
      nome: 'Q1 / 2019',
      periodoDoAno: 1
      // objetivos: [{
      //   nome: 'Objetivo Nome',
      //   descricao: 'Objetivo Descrição',
      //   idDoQuarter: 2
      // }],
      // krs: [{
      //   nome: 'Nome da KR',
      //   descricao: 'KR Descrição',
      //   idDoObjetivo: 2,
      //   valorInicial: 1,
      //   valorFinal: 100,
      //   valorAtual: 25
      // }]
    }
    window.firebase.database().ref(path).push(dadosQuarter)
  }

  render() {
    return (
      <div className="dialogo" id="dialogoObjetivo">
        <div className="dialogo__corpo">
          <form className="formulario" id="formularioObjetivo">
            <label htmlFor="quarter">Quarter</label>
            <select name="selecaoQuarter" id="selecaoQuarter">
              <option value="1">Quarter 1 - 2020</option>
              <option value="2">Quarter 2 - 2020</option>
            </select>

            <label htmlFor="nomeDoObjetivo">Nome do objetivo</label>
            <input type="text" id="nomeDoObjetivo" />

            <label htmlFor="descricaoDoObjetivo">Descrição</label>
            <textarea rows="3" id="descricaoDoObjetivo"></textarea>
          </form>
        </div>

        <div className="dialogo__rodape">
          <Botao icone='x-circle' texto="Cancelar" funcao={() => this.fecharDialogo('dialogoObjetivo')} />
          <Botao icone='plus-circle' type="submit" texto="Salvar objetivo" funcao={() => this.criarDados()} />
        </div>
      </div>
    );
  }
}
