import React from 'react';

class Table extends React.Components {
  render(){
    return (
      <div>
        <p>{this.props.nome}</p>
      </div>
    );
  }
}

export default Table;
