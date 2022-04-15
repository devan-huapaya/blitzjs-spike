import { FC } from 'react'
import { StyledButton } from './Button.styled'
import { ButtonProps } from './Button.types'

export const Button: FC<ButtonProps> = ({}) => {
	return <StyledButton data-testid='Button'>{/* children */}</StyledButton>
}
