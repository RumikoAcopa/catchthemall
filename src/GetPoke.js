import React from "react";

// function fetchPoke() {
//   const [pokemon] = useState;

//   useEffect(() => {
//     data.pokemon = pokemon;
//   });

//   return (
//     <div>
//       <p>Pokemon Type: 3 {pokemon} times</p>
//     </div>
//   );
// }

class GetPoke extends React.Component {
  state = {

  };
  
  fetch('http://localhost:3001/movies', { 
         method: 'GET',
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
         }
     })

       .then(res => res.json())
       .then(moviesJson => {
        dispatch({type: SUCCESSFULLY_LOADED_MOVIES,
            payload: moviesJson
        
        })
       });

  componentDidMount() {
  fetch("https://pokeapi.co/api/v2/type/3") {
    method: 'GET',
      headers: {
      'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  })
        .then((res) => res.json())
      .then((data) => {
        this.setState({
          pokemon: data.pokemon
        });
      });
    console.log(data);
    }
  }


  render() {
    // const { pokemon } = useState;

    // useEffect(() => {
    //   data.pokemon = pokemon;
    // });

    return (
      <ul>
        {pokemon.map((pokemon, index) => (
          <li key={index}>
            {pokemon.name} {pokemon.id}
          </li>
        ))}
      </ul>
    );
  }
  // {pokemon && pokemon.map((poke, index) => (
  //   <div key={index}>
  //     <h2>{poke.name}</h2>
  //   </div>

}

export default GetPoke;
