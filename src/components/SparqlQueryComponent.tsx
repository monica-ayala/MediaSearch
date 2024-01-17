import React, { useState, useEffect } from 'react';
import { executeSparqlQuery } from '../services/SparqlClientService';
import MediaCard from './MediaCard';

const SparqlQueryComponent: React.FC = () => {
  const [mediaData, setMediaData] = useState<any[]>([]);

  useEffect(() => {
    const runQuery = async () => {
      const query = `
      PREFIX ex: <http://example.org/media>

      SELECT ?movie ?title ?category ?description ?image ?director ?actor
      WHERE {
        GRAPH <http://13.49.69.191/movies> {
          ?movie rdf:type ex:Movie ;
                ex:title ?title ;
                ex:MovieCategory ?category ;
                ex:synopsis ?description ;
                ex:image ?image ;
                ex:MovieDirector ?director ;
                ex:MovieActor ?actor .
        }
      }
      `;

      try {
        const result = await executeSparqlQuery(query);

        // Transform RDF data to match the 'media' array format
        const transformedData = result.results.bindings.map((binding: any) => ({
          movie: binding.movie.value,
          title: binding.title.value,
          category: binding.category.value,
          description: binding.description.value,
          image: binding.image.value,
          director: binding.director.value,
          actor: binding.actor.value,
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
      <h2>SPARQL Query Results:</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {mediaData.map((item, index) => (
          <MediaCard
            key={index}
            title={item.title}
            category={item.category}
            description={item.description}
            // Add other properties as needed
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default SparqlQueryComponent;
