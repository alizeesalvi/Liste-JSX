export default function Fruit({ infoFruit, onFruitDelete }) {
  //state
  //const fruitInfo = props.infoFruit;
  // const onFruitDelete = props.onFruitDelete;

  //comportement

  //affichage
  return (
    <li>
      {infoFruit.nom}
      {""}
      <button onClick={() => onFruitDelete(infoFruit.id)}>X</button>
    </li>
  );
}
