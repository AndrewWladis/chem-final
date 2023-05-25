import './index.css';
import Element from './Element';
import elements from './data.json'

function App() {
  return (
    <div className="App">
      <div className='info'>
        <p className='info-text'>
          <b>Atomic Number</b> - The number of protons in the nucleus of an atom. This determines where it goes on the periodic table and the chemical properties of an element.
        </p>
        <p className='info-text'>
          <b>Atomic Mass</b> - The the mass of an atom of a chemical element.
        </p>
        <p className='info-text'>
          <b>Periodic Table</b> - A table that organizes all currently discovered chemical elements in rows (named periods) and columns (named groups) ordered by their increasing atomic number.
        </p>
      </div>
      {elements.elements.map((info) => <Element data={info} />)}
    </div>
  );
}

export default App;
