/**
 * This is a test file for Button
 */
import { Button } from "./index"
import { render, screen } from "@testing-library/react"
import React from "react"

describe("Button Component", () => {
  it("renders on the page", () => {
    render(<Button />)

    const component = screen.getByTestId("Button")

    expect(component).toBeInTheDocument()
  })
})
