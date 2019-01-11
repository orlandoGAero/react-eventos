import React, { Component } from 'react';

class Formulario extends Component {

    /*Refs*/
    EventoRef = React.createRef();
    CatRef = React.createRef();

    buscarEvento = (e) => {
        e.preventDefault();
        
        /* Crear objeto*/
        const datosBusqueda = {
            nombre: this.EventoRef.current.value,
            categoria: this.CatRef.current.value
        }

        /* Pasar por props */
        this.props.obtenerEventos(datosBusqueda);

    }

    mostrarCategorias = (key) => {
        const categoria = this.props.categorias[key];

        const {id, name_localized} = categoria;

        if(!id || !name_localized) return null;

        return(
            <option key={id} value={id}>{name_localized}</option>
        )
    }

    render() { 

        const categorias = Object.keys(this.props.categorias);
        
        return ( 
            <form onSubmit={this.buscarEvento}>
                <fieldset className="uk-fieldset uk-margin">
                    <legend className="uk-legend uk-text-center">
                        Busca tu evento por nombre o categoria
                    </legend>
                    
                    <div className="uk-column-1-3@m uk-margin">
                        <div className="uk-margin" uk-margin="true">
                            <input ref={this.EventoRef} className="uk-input" type="text" placeholder="Nombre de evento o ciudad"/>
                        </div>
                        <div className="uk-margin" uk-margin="true">
                            <select ref={this.CatRef} className="uk-select">
                                {categorias.map(this.mostrarCategorias)}
                            </select>
                        </div>
                        <div className="uk-margin" uk-margin="true">
                            <button className="uk-button uk-button-danger">
                                Buscar
                            </button>
                        </div>
                    </div>
                </fieldset>
            </form>
         );
    }
}
 
export default Formulario;