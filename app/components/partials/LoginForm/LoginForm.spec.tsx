/**
 * This is a test file for LoginForm
 */
import { render, screen } from '@testing-library/react'
import React from 'react'
import { LoginForm } from './index'

describe('LoginForm Component', () => {
	it('renders on the page', () => {
		render(<LoginForm />)

		const component = screen.getByTestId('LoginForm')

		expect(component).toBeInTheDocument()
	})
})
