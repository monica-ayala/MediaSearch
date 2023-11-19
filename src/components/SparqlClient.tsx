// SparqlClientComponent.tsx

import React, { useState } from 'react';
import SparqlClientService from '../services/SparqlClientService';

interface SparqlClientProps {
  sparqlClientService: SparqlClientService;
}

const SparqlClient: React.FC<SparqlClientProps> = ({ sparqlClientService }) => {
  const [sparqlQuery, setSparqlQuery] = useState<string>('');
  const [queryResult, setQueryResult] = useState<any>(null);

  const executeQuery = async () => {
    try {
      const result = await sparqlClientService.executeQuery(sparqlQuery);
      setQueryResult(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <textarea
        value={sparqlQuery}
        onChange={(e) => setSparqlQuery(e.target.value)}
        placeholder="Enter SPARQL query here"
      />
      <button onClick={executeQuery}>Execute Query</button>
      {queryResult && (
        <div>
          <h2>Query Result:</h2>
          <pre>{JSON.stringify(queryResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SparqlClient;
