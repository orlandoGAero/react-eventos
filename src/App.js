import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Eventos from './componentes/Eventos';

class App extends Component {

  token = 'JGXUMFNKJM3O4HSWVEOK';
  ordenar = 'date';
  state = {
    categorias: [],
    eventos: []
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

  obtenerEventos = async (busqueda) => {
    const url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;
    
    await fetch(url)
      .then(resp => resp.json())
      .then(eventos => {
        this.setState({
          eventos: eventos.events
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
            obtenerEventos={this.obtenerEventos}
          />

          <Eventos
            eventos={this.state.eventos}
          />
        </div>
      </div>
    );
  }
}

export default App;
