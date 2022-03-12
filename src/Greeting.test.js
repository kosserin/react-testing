import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting"

describe('Greeting component', () => {
    test('renders "Greeting bro" if the button was NOT clicked', () => {
        render(<Greeting />);

        const outputElement = screen.getByText('Greeting bro', {exact: false});
        expect(outputElement).toBeInTheDocument();
    })

    test('renders "It"s changed"" if the button was NOT clicked', () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const outputElement = screen.queryByText('Greeting bro', {exact: false});
        expect(outputElement).toBeNull();
    })

    test('does not render "its changed" if the button was clicked', () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const outputElement = screen.getByText('changed', {exact: false});
        expect(outputElement).toBeInTheDocument();
    })
})