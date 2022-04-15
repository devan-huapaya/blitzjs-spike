import { FC } from 'react'
import { StyledDateField } from './DateField.styled'
import { DateFieldProps } from './DateField.types'

export const DateField: FC<DateFieldProps> = ({}) => {
	return <StyledDateField data-testid='DateField'>{/* children */}</StyledDateField>
}
