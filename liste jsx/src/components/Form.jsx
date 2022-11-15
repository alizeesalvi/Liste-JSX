export default function Form({ handleSubmit, nouveauFruit, handleChange }) {
  //state

  //comportement

  //affichage
  return (
    <form action="Submit" onSubmit={handleSubmit}>
      <input
        value={nouveauFruit}
        type="text"
        placeholder="Ajouter un fruit..."
        onChange={handleChange} // prend en considération le changement
      />
      <button>Ajouter +</button>
    </form>
  );
}
