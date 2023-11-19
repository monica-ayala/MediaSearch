import axios from 'axios';

class SparqlClientService {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async executeQuery(query: string): Promise<any> {
    try {
      const response = await axios.post(
        this.endpoint,
        {
          query,
          format: 'json', 
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error executing SPARQL query:', error);
      throw error;
    }
  }
}

export default SparqlClientService;
