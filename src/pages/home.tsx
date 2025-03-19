export default function Home() {
    return(
        <div className="heroSection">
            <h1 className="heroSection-title">BRUNO DEBATTISTA</h1>
            <h2 className="heroSection-subheading">Electronic Engineer</h2>

            <div className="heroSection-imgParaCTA">
                <div className="heroSection-imgPara">
                    <div className="heroSection-imgCTA">
                        <p className="heroSection-headerPara">
                            I am an Electronic Engineer with a strong skillset in circuit, hardware and computer aided design. 
                            My time at Lightricity has allowed me valuable real-world experience.  
                            </p>
                        <img className="heroSection-img mobileImg" src="\assets\imgs\Bruno\Bruno-Portrait_v01_.jpg" height="450px" width="450px"/>
                        <a href="mailto:brudebattista@gmail.com" target="_blank" className="heroSection-CTAButton">CONTACT</a>
                    </div>
                    <img className="heroSection-img desktopImg" src="\assets\imgs\Bruno\Bruno-Portrait_v01_.jpg" height="450px" width="450px"/>
                </div>
            </div>
        </div>
    )
}
