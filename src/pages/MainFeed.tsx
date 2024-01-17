import SparqlQueryComponent from "../components/SparqlQueryComponent"
import BooksQuery from "../components/Media/BooksQuery"
import MoviesQuery from "../components/Media/MoviesQuery"
import SongsQuery from "../components/Media/SongsQuery"
import VideogamesQuery from "../components/Media/VideogamesQuery"
import { Tabs } from 'flowbite-react';
import { HiUserCircle, HiFilm, HiBookOpen, HiMusicNote } from 'react-icons/hi';
import Wrapper from "../containers/Wrapper"
type Props = {}

export default function MainFeed({}: Props) {
  
  return (
    <Wrapper>
<Tabs aria-label="Tabs with underline" style="underline">
      <Tabs.Item active title="All" icon={HiUserCircle}>
        <SparqlQueryComponent />
      </Tabs.Item>
      <Tabs.Item title="Movies" icon={HiFilm}>
        <MoviesQuery />
      </Tabs.Item>
      <Tabs.Item title="Videogames" icon={HiBookOpen}>
        <VideogamesQuery />
      </Tabs.Item>
      <Tabs.Item title="Books" icon={HiBookOpen}>
        <BooksQuery />
      </Tabs.Item>
      <Tabs.Item title="Songs" icon={HiMusicNote}>
        <SongsQuery />
      </Tabs.Item>
    </Tabs>
      </Wrapper>
  )
}