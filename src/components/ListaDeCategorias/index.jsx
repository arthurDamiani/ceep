import React, { Component } from 'react';

class ListaDeCategorias extends Component {

    _handleInputEvent(e){
        if(e.key == "Enter") {
            let valorCategoria = e.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }

    render() { 
        return (
            <section>
                <ul>
                    {this.props.categorias.map((categoria, index) => {
                        return <li key={index}>{categoria}</li>
                    })}
                </ul>
                <input type="text" placeholder='adicionar categoria' onKeyUp={this._handleInputEvent.bind(this)} />
            </section>
        );
    }
}
 
export default ListaDeCategorias;