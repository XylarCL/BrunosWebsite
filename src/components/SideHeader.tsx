
export default function SideHeader() {

    return (
        <div className="sideHeader">
            <a className="sideHeader-content" href="https://www.linkedin.com/in/bruno-debattista-706bb0318/" target="_blank"><img className="sideHeader-img" src="\assets\imgs\sideHeaderIcons\linkedIn.png" height="50px" width="50px"/></a>
            <a className="sideHeader-content" href="\assets\Bruno_Debattista_CV 2.pdf" target="_blank"><img className="sideHeader-img" src="\assets\imgs\sideHeaderIcons\CV.png" height="50px" width="50px"/></a>
            <a className="sideHeader-content email" href="mailto:brudebattista@gmail.com" target="_blank" data-title="brudebattista@gmail.com">
                <img className="sideHeader-img" src="\assets\imgs\sideHeaderIcons\email.png" height="50px" width="50px"/> 
                <span>brudebattista@gmail.com</span>
            </a>
            <hr className="sideHeader-VR"/>
        </div>
    )
}