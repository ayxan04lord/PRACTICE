import './Button.css'

const Button = ({name}) => {
    return(
        <>
        <button className="btn btn-success myButton" type="submit">{name}</button>
        </>
    )
}

export default Button;