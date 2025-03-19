import ProjectTile from '../components/ProjectTile';;

export default function Projects() {
  const projectTileImgs: string[] = ["ProjectOne.jpg", "ProjectTwo.jpg", "ProjectThree.jpg", "ProjectFour.jpg", "ProjectFive.jpg"];
  const projectTileTitles: string[] = ["Example One", "Example Two", "Example Three", "Example Four", "Example Five"];
  const projectTitleInfos: string[] = ["This was a codack flash circuit. After stripping uneeded hardware...", "Using an electromagnetic fault attack, I...", "To start this project I used a bread...", "This project required hooking up to a the debug port on the smart meter...", "I used the single wire debug, with a different microcontroller called black magic...."];
  return (
  <div className='projectTile-container'>
    {projectTileImgs.map((img, index) => (
      <ProjectTile key={"Project Tile " + projectTileTitles[index]} image={img} title={projectTileTitles[index]} info={projectTitleInfos[index]}/>
    ))}
  </div>);
}