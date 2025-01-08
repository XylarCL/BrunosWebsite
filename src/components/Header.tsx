
function Header() {
    const headerContent: string[] = ["Home","Projects","About"];
    return (<header>
        {headerContent.map((item) => (
            <p key={item} className="header-content" onClick={() => console.log(item)}>{item}</p>
        ))}
    </header>);
}

export default Header;