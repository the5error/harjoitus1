import React, { Component } from 'react';

class SyotaMaara extends Component {

  constructor(props){
    super(props);
    this.state= {tuote: "",maara: ""};
  }
  muuta = (e) => {
     this.setState( { [e.target.name]: e.target.value} );
 }
 tyhjenna = (e) => {
   e.preventDefault();
   this.setState( {tuote: "",maara: ""} );
 }
 lisaa = (e) => {
   e.preventDefault();
   var toisto = 5;
   var tulos = "";
   var i;
   for (i = 0; i < toisto; i++) {
      tulos = tulos + i;
     document.getElementById("tuloste").innerHTML = tulos;

   }

 }

render() {
  return(
    <form>

      <label htmlFor='Tuote'>Tuote</label>
      <input type='text' name='tuote' value={this.state.tuote} onChange={this.muuta} />
      <label htmlFor='Maara'>Määrä</label>
      <input type='text' name='maara' value={this.state.maara} onChange={this.muuta} />
      <br />
      <p id="tuloste"></p>
      <input type='button' value='Tyhjennä' onClick={this.tyhjenna} />
      <br />
      <input type='button' value='Lisää' onClick={this.lisaa} />
    </form>

  )
}
}

export default SyotaMaara;
