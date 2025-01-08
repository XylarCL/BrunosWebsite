interface Props {
    image: string;
    title: string;
    info: string;
}

function ProjectTile({image, title, info}: Props) {
    return (
        <div>
            <img src={"../assests/projectTileImages/" + image}></img>
            <h3 className="projectTile-title">{title}</h3>
            <p className="projecTile-info">{info}</p>
        </div>
    )
}

export default ProjectTile;