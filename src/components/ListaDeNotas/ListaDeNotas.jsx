import React, {Component} from 'react';
import CardNota from '../CardNota/CardNota';
import './style.css';

class ListaDeNotas extends Component {
    render() {
        return (
            <ul className="lista-notas">
                {this.props.notas.map((nota, index) => {
                    return (
                        <li className="lista-notas" key={index}>
                            <CardNota index={index} deleteNote={this.props.deleteNote} titulo={nota.titulo} texto={nota.texto} categoria={nota.categoria} />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaDeNotas;
