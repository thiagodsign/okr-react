import React from 'react'
import Botao from '../botao/Botao'

export default class CriacaoDeObjetivo extends React.Component {
  fecharDialogo(id) {
    document.getElementById(id).classList.remove('dialogo_aberto')
  }

  salvarObjetivo() {
    alert(this.objetivoNome);
  }

  // criarObjetivo() {
  //   let idDoObjetivo;

  //   if (okr.objetivos && okr.objetivos.length) {
  //     idDoObjetivo = okr.objetivos.length
  //   } else {
  //     idDoObjetivo = 0
  //   }

  //   let nome = document.getElementById('nomeDoObjetivo').value
  //   let idQuarter = document.getElementById('selecaoQuarter').value
  //   let descricao = document.getElementById('descricaoDoObjetivo').value

  //   firebase.database().ref('okr/objetivos/' + idDoObjetivo + '/').update({
  //     id: idDoObjetivo + 1,
  //     nome: nome,
  //     descricao: descricao,
  //     idDoQuarter: Number(idQuarter)
  //   }).then(() => {
  //     window.location.reload()
  //   })
  // }

  render() {
    return (
      <div className="dialogo" id="dialogoObjetivo">
        <div className="dialogo__corpo">
          <form className="formulario" id="formularioObjetivo">
            <label htmlFor="quarter">Quarter</label>
            <select name="selecaoQuarter" id="selecaoQuarter">
              <option value="1">Quarter 1 - 2019</option>
            </select>

            <label htmlFor="nomeDoObjetivo">Nome do objetivo</label>
            <input type="text" id="nomeDoObjetivo" />

            <label htmlFor="descricaoDoObjetivo">Descrição</label>
            <textarea rows="3" id="descricaoDoObjetivo"></textarea>
          </form>
        </div>


        <div className="dialogo__rodape">
          <Botao texto="Cancelar" funcao={() => this.fecharDialogo('dialogoObjetivo')} />
          <Botao type="submit" texto="Salvar objetivo" funcao={() => this.salvarObjetivo('dialogoObjetivo')} />
        </div>
      </div>
    );
  }
}
