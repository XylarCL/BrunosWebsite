interface Props {
    image: string;
    title: string;
    info: string;
}

function ProjectTile({image, title, info}: Props) {
    return (
        <div key={"Project Tile Div " + title} className="projectTile">
            <img key={image} className="projectTile-img" src={"../assests/projectTileImages/" + image}></img>
            <h3 key={title} className="projectTile-title">{title}</h3>
            <p key={info} className="projectTile-info">{info}</p>
        </div>
    )
}

export default ProjectTile;