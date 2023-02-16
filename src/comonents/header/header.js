function Header(props){
    return(
        <div>
            <h1>
                hello, {props.name} {props.class}
            </h1>
        </div>
    )
}
export default Header