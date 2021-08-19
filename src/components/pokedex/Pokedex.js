import './Pokedex.css';

import { Component } from "react";
import Pokecard from '../pokecard/Pokecard';


class Pokedex extends Component {
  render() {
    const props = this.props;
    const pokemon = this.props.pokemon;
    let title;
    if (props.isWinner) {
      title = <h1 className="pokedex-winner">Winning Hand!</h1>;
    } else {
      title = <h1 className="pokedex-loser">Losing Hand!</h1>;
    }
    return (
      <div className="pokedex">
        <div className="pokedex-title">
          {title}
          <p>Total Experience: {props.exp}</p>
        </div>
        <div className="pokedex-card-box">
          {Object.keys(pokemon).map((p, i) => {
            return <Pokecard
              key={i}
              id={pokemon[p].id}
              name={pokemon[p].name}
              type={pokemon[p].type}
              base_experience={pokemon[p].base_experience}
            />
          })}
        </div>
      </div>
    );
  }
}

export default Pokedex;