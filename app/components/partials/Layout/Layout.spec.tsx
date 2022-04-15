/**
 * This is a test file for Layout
 */
import { render, screen } from '@testing-library/react'
import React from 'react'
import { Layout } from './index'

describe('Layout Component', () => {
	it('renders on the page', () => {
		render(<Layout />)

		const component = screen.getByTestId('Layout')

		expect(component).toBeInTheDocument()
	})
})
