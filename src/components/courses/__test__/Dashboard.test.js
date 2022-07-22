import { render, screen } from '@testing-library/react';
import { ReactDOM } from 'react-dom';
import Header from './../Header';

it("Redering without crashing",() =>{
    const div = document.createElement("div");
    render(<Header value="Shopping Cart"></Header>, div);
    expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
})

