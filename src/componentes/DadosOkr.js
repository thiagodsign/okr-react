import React from 'react'
import Okr from './okr/Okr';

export default class DadosOkr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      okr: {
        quarters: [],
        objetivos: [],
        krs: []
      }
    }
  }

  componentDidMount() {
    window.firebase.database().ref('okr/').once('value').then((snapshot) => {
      this.setState({ okr: (snapshot.val() && snapshot.val()) })
    })
  }

  render() {
    return (
      <Okr okr={this.state.okr} />
    )
  }
} 