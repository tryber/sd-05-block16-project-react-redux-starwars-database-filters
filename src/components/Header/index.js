import React from 'react';
import { connect } from 'react-redux'
import { fetchPlanets } from '../../actions'

class Header extends React.Component {
  

  render() {
    return (
      <header>
        <h3>Starwars API</h3>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  planets: state.APIreducer.data
})
const mapDispatchToProps = (dispatch) => ({
  getInfo: (e) => dispatch(fetchPlanets())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
