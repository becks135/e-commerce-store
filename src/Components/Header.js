import Button from "./Button";

function Header(props) {
    return(
        <header>
            <h3>{props.headerText}</h3>
            <a href="#clothing" className="button">Shop Now</a>
        </header>
    )
}

export default Header;