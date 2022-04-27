function Button(props){
    const label = props.label;
    const classList = props.classList;
    const clickFunction = props.clickFunction;

    return(
        <button onClick={clickFunction} className={classList}>{label}</button>
    )
}

export default Button;