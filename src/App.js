import React, { Component } from 'react';
import Header from './componentes/Header';
import Noticias from './componentes/Noticias';


class App extends Component {

  state = {
    noticias: []
  }
  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = () => {
    let url = `https://newsapi.org/v2/top-headlines?country=ar&category=general&apiKey=b6befcf773db43efae73f7c59d23215b`;
    
    fetch(url)
      .then(respuesta => {
        return respuesta.json();
    })
      .then(noticias => {
        this.setState({
          noticias: noticias.articles
      })
      //console.log(noticias.articles);
    })
  }

  render() {
    return (
      <div className="contenedor-app">
        <Header 
          titulo='Noticias RSS' />
        <div className="container white contenedor-noticias">
          <Noticias
          noticias = {this.state.noticias} />
        </div>
      </div>
    );
  }
}

export default App;
