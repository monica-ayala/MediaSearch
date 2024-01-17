import MediaCard from "../components/MediaCard"
import Wrapper from "../containers/Wrapper"
type Props = {}

export default function Test({}: Props) {

    const media = [
        {
          title: "Lady Bird",
          category: "Category",
          description: "Portrait of the female adolescence in this funny, sensible and unexpected movie by Greta Gerwig.",
          image: "https://hips.hearstapps.com/hmg-prod/images/lady-bird-1512416218.jpg?crop=1xw:1xh;center,top&resize=980:570",
          link: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8",
          owner: "Owner",
          type: "Type"
        },
        {
          title: "Petite Maman",
          category: "Category",
          description: "Tells the story of the friendship between two girls, talks about loss and family heritage like no other film has before.",
          image: "https://hips.hearstapps.com/hmg-prod/images/petite-maman-1636817138.jpg?crop=1xw:1xh;center,top&resize=980:570",
          link: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8",
          owner: "Owner",
          type: "Type"
        },
        {
          title: "Media Card 3",
          category: "Category",
          description: "Studio Ghibli greatest movie, a must watch for everyone about the difficulty of following your dreams.",
          image: "https://hips.hearstapps.com/hmg-prod/images/susurros-del-corazon-studio-ghibli-5-1545138931.jpg?crop=1.00xw:0.948xh;0,0.0185xh&resize=980:570",
          link: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8",
          owner: "Owner",
          type: "Type"
        },
        {
          title: "Media Card 3",
          category: "Category",
          description: "Description",
          image: "https://hips.hearstapps.com/hmg-prod/images/fresh-sebastian-stan-1648033637.jpg?crop=1xw:1xh;center,top&resize=980:570",
          link: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8",
          owner: "Owner",
          type: "Type"
        },
        {
          title: "Media Card 3",
          category: "Category",
          description: "Description",
          image: "https://hips.hearstapps.com/hmg-prod/images/contador-de-cartas-fotogramas-1640724515.jpg?crop=1xw:1xh;center,top&resize=980:570",
          link: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8",
          owner: "Owner",
          type: "Type"
        },{
          title: "Media Card 3",
          category: "Category",
          description: "Description",
          image: "https://hips.hearstapps.com/hmg-prod/images/parasitos-1582556238.jpeg?crop=0.786xw:1.00xh;0.148xw,0&resize=980:570",
          link: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8",
          owner: "Owner",
          type: "Type"
        }
      ]

      
  return (
        <Wrapper>
            <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {media.map((item, index) => (
                    <MediaCard key={index} title={item.title} category={item.category} description={item.description} image={item.image} link={item.link} owner={item.owner} type={item.type} />
                ))}
            </div>
            </>
        </Wrapper>
  )
}