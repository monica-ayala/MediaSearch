import SparqlClientService from './services/SparqlClientService';
import SparqlClient from './components/SparqlClient';
import MediaCard from './components/MediaCard';
import './App.css'

function App() {
  const sparqlClientService = new SparqlClientService(import.meta.env.VITE_REACT_APP_SPARQL_ENDPOINT || ''); 
  const media = [
    {
      title: "Media Card 1",
      category: "Category",
      description: "Description",
      image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8",
      link: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8",
      owner: "Owner",
      type: "Type"
    },
    {
      title: "Media Card 2",
      category: "Category",
      description: "Description",
      image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8",
      link: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8",
      owner: "Owner",
      type: "Type"
    },
    {
      title: "Media Card 3",
      category: "Category",
      description: "Description",
      image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8",
      link: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8",
      owner: "Owner",
      type: "Type"
    },
    {
      title: "Media Card 3",
      category: "Category",
      description: "Description",
      image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8",
      link: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8",
      owner: "Owner",
      type: "Type"
    },
    {
      title: "Media Card 3",
      category: "Category",
      description: "Description",
      image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8",
      link: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8",
      owner: "Owner",
      type: "Type"
    },{
      title: "Media Card 3",
      category: "Category",
      description: "Description",
      image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8",
      link: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8",
      owner: "Owner",
      type: "Type"
    }
  ]

  return (
    <div className='p-28'>
      <div className='grid grid-cols-3 gap-4'>
        {
          media.map((media) => {
            return (
              <MediaCard
                title={media.title}
                category={media.category}
                description={media.description}
                image={media.image}
                link={media.link}
                owner={media.owner}
                type={media.type}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default App;

