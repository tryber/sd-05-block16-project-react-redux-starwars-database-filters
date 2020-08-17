// import { connect } from 'react-redux';
// import { Component } from 'react';
// import fetchedData from './fetchData';

// class App extends Component {
//   componentDidMount() {
//     const { fetchData } = this.props;
//     fetchData();
//   }

//   render() {
  // return (
  //   <div>
  //     <Table />
  //   </div>
  // );
  //   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   fetchData: () => dispatch(fetchedData()),
// });

// export default connect(null, mapDispatchToProps)(App);

// Componente feito inicialmente para fazer a requisicao junto a API,
// dos Planetas porem sem exito, tive que usar com o store.dispatch(fetchData());
