import { render, screen } from '@testing-library/react';
import { ReactDOM } from 'react-dom';
import Dashboard from './../Dashboard';

it("Redering without crashing",() =>{
    const div = document.createElement("div");
    ReactDOM.render(<Dashboard></Dashboard>, div);
})