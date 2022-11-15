import { useState } from "react";
import Fruit from "./components/Fruit";
import Form from "./components/Form";

function App() {
  //1.state (Etat, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Pêche" },
    { id: 3, nom: "Banane" }
  ]);

  const [nouveauFruit, setNouveauFruit] = useState("");

  //2. Comportements
  const handleDelete = (A) => {
    //alert("oui je suis la");
    // console.log(id);
    //1.copie du state
    //const fruitCopy = fruits.slice();
    const fruitCopy = [...fruits];

    //2.manipulation du state
    const fruitCopyUpdate = fruitCopy.filter((f) => f.id !== A);

    //3.modifier le state avec Setter (setFruits)
    setFruits(fruitCopyUpdate);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //Éviter le rechargement de la page
    //1. Copie du state
    const fruitCopy = [...fruits];
    //2. Manipulation sur la copie
    const id = new Date().getTime();
    const nom = nouveauFruit;
    fruitCopy.push({ id: id, nom: nom });
    //3. Modifier le state avec setter (setFruits)
    setFruits(fruitCopy);
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };
  //3. Affichage

  return (
    <div>
      <h1>Liste des fruits</h1>
      <ul>
        {fruits.map((f) => {
          return (
            // <li key={f.id}>
            //   {f.nom}
            //   <button onClick={() => handleDelete(f.id)}>X</button>
            // </li>
            <Fruit infoFruit={f} onFruitDelete={handleDelete} key={f.id} />
          );
        })}
      </ul>
      {
        /* <form action="Submit" onSubmit={handleSubmit}>
        <input
          value={nouveauFruit}
          type="text"
          placeholder="Ajouter un fruit..."
          onChange={handleChange} // prend en considération le changement
        />
        <button>Ajouter +</button>
      </form> */
        <Form
          handleSubmit={handleSubmit}
          nouveauFruit={nouveauFruit}
          handleChange={handleChange}
        />
      }
    </div>
  );
}

export default App;
