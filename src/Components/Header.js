import Button from "./Button";

function Header(props) {
    return(
        <>
            <div>
                <img src={props.imageSrc} alt={props.imageAlt}/>
            </div>
            <div>
                <h3></h3>
                <Button label={props.buttonLabel}/>
            </div>
        </>
    )
}

export default Header;