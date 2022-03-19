import {ButtonStyled} from './style'

const Button = ({children, ...rest}) => {
    return (
    <ButtonStyled rest={rest}>
        {children}
    </ButtonStyled>
    )
}

export default Button 