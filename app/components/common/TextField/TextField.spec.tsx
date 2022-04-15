/**
 * This is a test file for TextField
 */
import { render, screen } from '@testing-library/react'
import React from 'react'
import { TextField } from './index'

describe('TextField Component', () => {
	it('renders on the page', () => {
		render(<TextField />)

		const component = screen.getByTestId('TextField')

		expect(component).toBeInTheDocument()
	})
})
