import SparqlClientService from './services/SparqlClientService';
import SparqlClient from './components/SparqlClient';
import './App.css'

function App() {
  const sparqlClientService = new SparqlClientService(process.env.REACT_APP_SPARQL_ENDPOINT || ''); 

  return (
    <>
      <h4>Provitional SPARQL Client App</h4>
      <SparqlClient sparqlClientService={sparqlClientService} />
    </>
  )
}

export default App;

