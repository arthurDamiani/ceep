import React, { Component } from 'react';
import ListaDeCategorias from './components/ListaDeCategorias';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

import "./assets/App.css";
import './assets/index.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      notas:[],
      categorias:[],
    }
  }

  createNote(titulo, texto, categoria) {
    const novaNota = {titulo, texto, categoria};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  adicionarCategoria(nomeCategoria) {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    const novoEstado = {...this.state, categorias:novoArrayCategorias};
    this.setState(novoEstado);
  }

  deleteNote(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({notas: arrayNotas});
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro categorias={this.state.categorias} createNote={this.createNote.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias adicionarCategoria={this.adicionarCategoria.bind(this)} categorias={this.state.categorias} />
          <ListaDeNotas deleteNote={this.deleteNote.bind(this)} notas={this.state.notas} />
        </main>
      </section>
    );
  }
}

export default App;
