/**
 * This is a test file for Form
 */
import { render, screen } from '@testing-library/react'
import React from 'react'
import { Form } from './index'

describe('Form Component', () => {
	it('renders on the page', () => {
		render(<Form />)

		const component = screen.getByTestId('Form')

		expect(component).toBeInTheDocument()
	})
})
