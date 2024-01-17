import React, { useState, useEffect } from 'react';
import { executeSparqlQuery } from '../../services/SparqlClientService';
import MediaCard from '../MediaCard';

const VideogamesQuery: React.FC = () => {
  const [mediaData, setMediaData] = useState<any[]>([]);

  useEffect(() => {
    const runQuery = async () => {
      const query = `
      PREFIX ex: <http://example.org/>

      SELECT ?item ?title ?year ?description ?image ?category ?developer
      WHERE {
        GRAPH <http://13.49.69.191/videogames> {
          ?item rdf:type ex:Videogame;
                ex:title ?title ;
                ex:VideogameCategory ?category ;
                ex:synopsis ?description ;
                ex:image ?image ;
                ex:VideogameDeveloper ?developer.
        }
      }
      `;

      try {
        const result = await executeSparqlQuery(query);
        const transformedData = result.results.bindings.map((binding: any) => ({
          item: binding.item.value,
          title: binding.title.value,
          category: binding.category.value,
          description: binding.description.value,
          image: binding.image.value,
          developer: binding.developer.value,
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

export default VideogamesQuery;
