import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

class App extends Component {

  token = 'JGXUMFNKJM3O4HSWVEOK';
  state = {
    categorias: []
  }

  componentDidMount() {
    this.obtenerCategorias();
  }
  
  obtenerCategorias = async() => {
    const url = `https://www.eventbriteapi.com/v3/categories/?locale=es_ES&token=${this.token}`;

    await fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          categorias: data.categories
        })
      });
  }

  render() {
    return (
      <div className="App">
        <Header titulo="Eventos"></Header>

        <div className="uk-container">
          <Formulario
            categorias={this.state.categorias}
          />
        </div>
      </div>
    );
  }
}

export default App;
