import React, { useState, useEffect } from 'react';
import { executeSparqlQuery } from '../services/SparqlClientService';
import MediaCard from './MediaCard';

const SparqlQueryComponent: React.FC = () => {
  const [mediaData, setMediaData] = useState<any[]>([]);

  useEffect(() => {
    const runQuery = async () => {
      const query = `
      PREFIX ex: <http://example.org/>
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
      
      SELECT ?item ?type ?title ?image ?synopsis ?year ?artist ?category
      WHERE {
        {
          GRAPH <http://13.49.69.191/movies> {
            ?item rdf:type ex:Movie ;
                   ex:title ?title ;
                   ex:image ?image ;
                   ex:synopsis ?synopsis ;
                   ex:year ?year .
            BIND("Movie" AS ?type)
          }
        } UNION {
          GRAPH <http://13.49.69.191/songs> {
            ?item rdf:type ex:Song ;
                   ex:title ?title ;
                   ex:image ?image ;
                   ex:synopsis ?synopsis .
            BIND("Song" AS ?type)
          }
        } UNION {
          GRAPH <http://13.49.69.191/books> {
            ?item rdf:type ex:Book ;
                   ex:title ?title ;
                   ex:image ?image ;
                   ex:synopsis ?synopsis .
            BIND("Book" AS ?type)
          }
        } UNION {
          GRAPH <http://13.49.69.191/videogames> {
            ?item rdf:type ex:Videogame;
                   ex:title ?title ;
                   ex:image ?image ;
                   ex:synopsis ?synopsis .
            BIND("Videogame" AS ?type)
          }
        }
      }      
      `;

      try {
        const result = await executeSparqlQuery(query);

        // Transform RDF data to match the 'media' array format
        const transformedData = result.results.bindings.map((binding: any) => ({
          item: binding.item.value,
          title: binding.title.value,
          description: binding.synopsis.value,
          image: binding.image.value,
          type: binding.type.value,
          // Add other properties as needed
        }));

        setMediaData(transformedData);
      } catch (error) {
        console.error(error);
      }
    };

    runQuery();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {mediaData.map((item, index) => (
          <MediaCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default SparqlQueryComponent;
