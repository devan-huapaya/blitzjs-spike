/**
 * This is a test file for SignupForm
 */
import { render, screen } from '@testing-library/react'
import React from 'react'
import { SignupForm } from './index'

describe('SignupForm Component', () => {
	it('renders on the page', () => {
		render(<SignupForm />)

		const component = screen.getByTestId('SignupForm')

		expect(component).toBeInTheDocument()
	})
})
