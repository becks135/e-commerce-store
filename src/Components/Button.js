function Button(props){
    const label = props.label;
    const classList = props.classList;
    const handleFunction = props.handleFunction;

    return(
        <button onClick={handleFunction} className={classList}>{label}</button>
    )
}

export default Button;