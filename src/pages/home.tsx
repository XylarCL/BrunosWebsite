export default function Home() {
    return(
        <div className="heroSection">
            <h1 className="heroSection-title">BRUNO DEBATTISTA</h1>
            <h2 className="heroSection-subheading">Electronic Engineer</h2>

            <p className="heroSection-headerPara">Lorem ipsum odor amet, consectetuer adipiscing elit. Adolor consequat litora dapibus inceptos sem. Cras curabitur tempor penatibus vulputate sociosqu nulla. Tempor at vivamus tortor sit ornare ac adipiscing. Penatibus sem ultricies primis convallis libero facilisis nulla dapibus molestie. Tincidunt dolor nunc lectus per ultricies, est sit. Atempor enim auctor adipiscing feugiat lectus accumsan in. Urna dui elit tellus libero rutrum quis. Convallis finibus metus diam at vehicula, lacus litora.</p>

            <img className="heroSection-img mobileImg" src="\assets\imgs\Bruno\Bruno-Portrait_v01_.jpg" height="450px" width="450px"/>
            
            <a href="mailto:brudebattista@gmail.com" target="_blank" className="heroSection-CTAButton">CONTACT</a>

            <img className="heroSection-img desktopImg" src=".\assets\imgs\Bruno\Bruno-Portrait_v01_.jpg" height="450px" width="450px"/>
        </div>
    )
}
