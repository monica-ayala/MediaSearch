// src/services/sparqlService.ts

import axios from 'axios';

const SPARQL_ENDPOINT = 'http://13.49.69.191:8890/sparql';

export async function executeSparqlQuery(query: string): Promise<any> {
  try {
    const response = await axios.post(SPARQL_ENDPOINT, `query=${encodeURIComponent(query)}`, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      withCredentials: true,
    });
    
    return response.data;
  } catch (error) {
    console.error('Error executing SPARQL query:', error);
    throw error;
  }
}