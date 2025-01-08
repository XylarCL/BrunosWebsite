import Header from './components/Header';
import ProjectTile from './components/ProjectTile';;

function App() {
  const projectTileImgs: string[] = ["hello", "random", "penguins", "dolphin", "chickens"];
  const projectTileTitles: string[] = ["Pea man", "Josh autobot", "Penguins can fly", "Dolphins: Real or Trumpian Controversy?", "Chickens, just weird birds?"];
  const projectTitleInfos: string[] = ["This is a highly sophisticated piece of art...", "This is peak human performance...", "Penguins are notorious for a plethora of amazing behaviours...", "Dolphins, thought to be real...", "Chicken Little has been on the run for 50 years..."];
  return (
  <div>
    <Header key="Header"/>
    <div className='projectTile-container'>
      {projectTileImgs.map((img, index) => (
        <ProjectTile key={"Project Tile " + projectTileTitles[index]} image={img} title={projectTileTitles[index]} info={projectTitleInfos[index]}/>
      ))}
    </div>
  </div>);
}

export default App;