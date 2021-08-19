import './Pokecard.css';

import { Component } from "react";

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padId = (id) => id.toString().padStart(3, 0);

class Pokecard extends Component {
  render() {
    const {id, name, type, base_experience} = this.props;
    const imgUrl = `${POKE_API}${padId(id)}.png`;
    
    return(
      <div className="pokecard">
        <div className="pokecard-header">
          <h3>{name}</h3>
        </div>
        <div className="pokecard-img">
          <img src={imgUrl} alt={name}></img>
        </div>
        <div className="pokecard-footer">
          <div className="pokecard-type">
            <span>Type: {type}</span>
          </div>
          <div className="pokecard-exp">
            <span>EXP: {base_experience}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokecard;