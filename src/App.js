import React from 'react';
import './App.css';
import Title from './components/Title';
import FilterName from './components/FilterName';
import FilterNumber from './components/FilterNumber';
import Table from './components/Table';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
      </header>
      <section className="App-filters" style={{ flex: 1, flexDirection: 'row' }}>
        <FilterName />
        <FilterNumber />
      </section>
      <section className="App-section">
        <Table />
      </section>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
