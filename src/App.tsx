import Header from './components/Header';
import ProjectTile from './components/ProjectTile';;

function App() {
  const projectTileImgs: string[] = ["hello", "random"];
  const projectTileTitles: string[] = ["Pea man", "Josh autobot"];
  const projectTitleInfos: string[] = ["This is a highly sophisticated piece of art...", "This is peak human performance..."];
  return (
  <div>
    <Header />
    {projectTileImgs.map((img, index) => (
      <ProjectTile image={img} title={projectTileTitles[index]} info={projectTitleInfos[index]}/>
    ))}
  </div>);
}

export default App;