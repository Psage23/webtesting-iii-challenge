// Test away
import React from 'react'
import Dashboard from './Dashboard';
import { render } from '@testing-library/react';

test("Render the Dashboard", () => {
    render(<Dashboard />);
});

test("shows controls and display", () => {
    const { getByText } = render(<Dashboard />);

    const display = getByText(/open/i)
    const controls = getByText(/close gate/i)

    expect(display).toBeDefined();
    expect(controls).toBeDefined();
}) 
