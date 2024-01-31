import React from "react";
import { render, screen } from '@testing-library/react';
import Search from ".";

describe('Unit Testing Search Component', () => {
    test('Expect Search button to be rendered', () => {
        render(<Search />);
        const buttonElement = screen.getByRole('button'); 
        expect(buttonElement).toBeDefined();
    });
});
