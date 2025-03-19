export default function About() {
    return(
        <div className="aboutPage">
            
            <img className="aboutPage-img" src='/assets/imgs/Bruno/Bruno-Portrait_v01_-2.jpg' height="750px" width="375px"/>
        
            <div className="aboutPage-content">
                <h1 className="aboutPage-title">ABOUT ME</h1>

                <h2 className="aboutPage-subtitle">Profile</h2>
                <p className="aboutPage-para">
                    I am an Electronic Engineer with a strong understanding of Circuit Design, Hardware Design, 
                    and Computer Aided Design gained through my degree at King’s College London and hands-on experience in academic and industrial settings. 
                    During my final year at university, 
                    I completed an individual research project designing, testing and building Variable Impedance Actuators (VIAs). 
                </p>
                <h2 className="aboutPage-subtitle">Industry Experience</h2>
                <p className="aboutPage-para">
                    I also have strong industry experience gained during my time at Lightricity Ltd in Oxford where I was in charge of designing a 
                    circuit to allow for accurate light intensity measurements to be obtained from a solar cell. 
                </p>
                <h2 className="aboutPage-subtitle">Self-Taught</h2>
                <p className="aboutPage-para">
                    Beyond academics and industry, I have expanded my skills through self-directed learning and projects. 
                    My passion for engineering, combined with hands-on experience, 
                    enables me to tackle complex engineering challenges effectively.
                </p>
            </div>
            
        </div>
    )
}
