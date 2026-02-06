// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders apiHorizon title', () => {
    render(<App />);
    const titleElement = screen.getByText(/apiHorizon/i);
    expect(titleElement).toBeInTheDocument();
});
