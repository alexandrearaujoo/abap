import {ButtonStyled} from './style'

const Button = ({span, ...rest}) => {
    return (
    <ButtonStyled rest={rest}>
        <span>{span}</span>
        <div></div>
    </ButtonStyled>
    )
}

export default Button 