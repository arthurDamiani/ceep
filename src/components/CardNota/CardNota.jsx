import React, { Component } from 'react';
import {ReactComponent as Delete} from '../../assets/img/delete.svg';

import './style.css';

class CardNota extends Component {

    delete() {
        const index = this.props.index;
        this.props.deleteNote(index);
    }

    render() {
        return ( 
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                    <Delete onClick={this.delete.bind(this)} />
                    <h4>{this.props.categoria}</h4>
                </header>
                <p className="card-nota_texto">{this.props.texto}</p>
            </section>
         );
    }
}
 
export default CardNota;