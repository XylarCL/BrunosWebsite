
export default function SideHeader() {

    return (
        <div className="sideHeader">
            <a href="https://www.linkedin.com/in/bruno-debattista-706bb0318/" target="_blank"><img className="sideHeader-content" src="%PUBLIC_URL%\assets\imgs\sideHeaderIcons\linkedIn.png" height="50px" width="50px"/></a>
            <a href="%PUBLIC_URL%\imgs\Bruno_Debattista_CV 2.pdf" target="_blank"><img className="sideHeader-content" src="%PUBLIC_URL%\assets\imgs\sideHeaderIcons\CV.png" height="50px" width="50px"/></a>
            <a className="email" href="mailto:brudebattista@gmail.com" target="_blank" data-title="brudebattista@gmail.com">
                <img className="sideHeader-content" src="%PUBLIC_URL%\assets\imgs\sideHeaderIcons\email.png" height="50px" width="50px"/> 
                {/*
                <div className="slideRight">w
                    <h3 className="slideRight-text">brudebattista@gmail.com</h3>
                </div> */}
            </a>
            <hr className="sideHeader-VR"/>
        </div>
    )
}