import React from 'react'
import Quarters from './Quarters'

export default class Okr extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      okr: {
        objetivos: [],
        quarters: [],
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
      <div className="container container_com-margem">
        {
          this.state.okr.quarters.map(quarter => (
            <Quarters quarter={quarter} okr={this.state.okr} />
          ))
        }

      </div>
    )
  }
}