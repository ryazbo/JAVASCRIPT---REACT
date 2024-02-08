import './App.css'
import AdvancedFilter from './comps/AdvancedFilter'

function App() {


  const filterOptions = [

    { label: 'id', value: '' },

    { label: 'codigo', value: '' },

  ];

  const handleSelectFilter = (value: any) => {

    console.log('Filtro seleccionado:', value);

  };


  return (
    <div>
      <AdvancedFilter 
        options={filterOptions}
        onSelect={handleSelectFilter} />
    </div>
  )
}

export default App
