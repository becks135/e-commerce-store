import Button from "./Button";

function Header(props) {
    return(
        <header>
            <div>
                <img src={props.imageSrc} alt={props.imageAlt}/>
            </div>
            <div>
                <h3></h3>
                <Button label={props.buttonLabel}/>
            </div>
        </header>
    )
}

export default Header;