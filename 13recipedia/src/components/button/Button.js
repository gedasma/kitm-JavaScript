import './button.scss'

function Button({buttonText, refLink}){
    return (<a href={refLink} className="linkButton">
                <h4>{buttonText}</h4>
            </a>)
}

export default Button;