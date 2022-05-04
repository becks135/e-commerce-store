function Header(props) {
    return(
        <header id="home">
            <h3>{props.headerText}</h3>
            <a href="#clothing" className="button">Shop Now</a>
        </header>
    )
}

export default Header;