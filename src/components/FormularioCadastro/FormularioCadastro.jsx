import React, {Component} from 'react';

import './style.css';

class FormularioCadastro extends Component {

    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";
        this.categoria = "sem categoria";
    }

    _handleMudancaCategoria(event) {
        event.stopPropagation();
        this.categoria = event.target.value;
    }

    _handleTitleChange(event) {
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    _handleTextChange(event) {
        event.stopPropagation();
        this.texto = event.target.value;
    }

    _createNote(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.createNote(this.titulo, this.texto, this.categoria);
    }

    render() {
        return (
            <form className="form-cadastro" onSubmit={this._createNote.bind(this)}>
                <select onChange={this._handleMudancaCategoria.bind(this)} className="form-cadastro_input">
                    <option defaultChecked >sem categoria</option>
                    {this.props.categorias.map(categoria => {
                        return <option>{categoria}</option>
                    })}
                </select>
                <input
                    className="form-cadastro_input"
                    type="text"
                    placeholder="Título" 
                    onChange={this._handleTitleChange.bind(this)}
                />
                <textarea
                    className="form-cadastro_input"
                    placeholder="Escreva sua nota..." 
                    rows={15} 
                    onChange={this._handleTextChange.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
            </form>
        )
    }
}

export default FormularioCadastro;
