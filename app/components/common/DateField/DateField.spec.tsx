/**
 * This is a test file for DateField
 */
import { render, screen } from '@testing-library/react'
import React from 'react'
import { DateField } from './index'

describe('DateField Component', () => {
	it('renders on the page', () => {
		render(<DateField />)

		const component = screen.getByTestId('DateField')

		expect(component).toBeInTheDocument()
	})
})
