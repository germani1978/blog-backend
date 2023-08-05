import PropTypes from 'prop-types';

const ChechPanel = ({tag, handleTag}) => {
  return (
    <div>
         <h1 className="text-2xl mb-2 font-bold">Categoria</h1>
      <label>
        <input
          type="radio"
          name="tema"
          value="ciencia"
          checked={tag === "ciencia"}
          onChange={handleTag}
        />
        Ciencia
      </label>
      <br />

      <label>
        <input
          type="radio"
          name="tema"
          value="arte"
          checked={tag === "arte"}
          onChange={handleTag}
        />
        Arte
      </label>
      <br />

      <label>
        <input
          type="radio"
          name="tema"
          value="economia"
          checked={tag === "economia"}
          onChange={handleTag}
        />
        Economia
      </label>
      <br />

      <label>
        <input
          type="radio"
          name="tema"
          value="politica"
          checked={tag === "politica"}
          onChange={handleTag}
        />
        Politica
      </label>
      <br />

      <label>
        <input
          type="radio"
          name="tema"
          value="musica"
          checked={tag === "musica"}
          onChange={handleTag}
        />
        Musica
      </label>
      <br />

      <label>
        <input
          type="radio"
          name="tema"
          value="tiempo"
          checked={tag === "tiempo"}
          onChange={handleTag}
        />
        Tiempo
      </label>
      <br />

      <label>
        <input
          type="radio"
          name="tema"
          value="naturaleza"
          checked={tag === "naturaleza"}
          onChange={handleTag}
        />
        Naturaleza
      </label>
      <br />
    </div>
  )
}

export default ChechPanel

ChechPanel.propTypes = {
    tag: PropTypes.string.isRequired,
    handleTag: PropTypes.func.isRequired,
};