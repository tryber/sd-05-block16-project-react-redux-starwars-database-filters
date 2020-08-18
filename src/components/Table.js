import React from 'react';
import { connect } from 'react-redux';
import { fetchPlanets } from '../actions';
import PropTypes from 'prop-types';

class Table extends React.Component{
  componentDidMount(){
    const { getCurrentPlanets } = this.props;
    console.log('antes de chamar')
    getCurrentPlanets();
    // console.log(oi);
  }

  render (){
    const { swPlanetss, isFetching, data } = this.props
    console.log(this.props)
    console.log(swPlanetss);
    console.log(typeof(swPlanetss))
    return(
      <section>
        <div> 
         {/* {swPlanetss.map((elements)=> (
           <div>{elements.name}</div>
         ))} */}
        </div>
    <div>StarWars Datatable with Filters</div>
    </section>
    )
  }
}
  
const mapStateToProps = (state) => ({
  swPlanetss: state.swPlanetss.data.results,
  isFetching: state.swPlanetss.isFetching,
})
const mapDispatchToProps = (dispatch) => ({
  getCurrentPlanets: () => dispatch
  (fetchPlanets()),
})

// ApplicationCache.propTypes = {
//   getCurrentPlanets: PropTypes.func.isRequired,
// };

export default connect(mapStateToProps,mapDispatchToProps)(Table);
