import { render, screen } from "@testing-library/react";
import App from "./App";

describe('App', () => {
  const renderComponent = () => render(<App />);

  it('should be rendered', () => {
    renderComponent();
    
    expect(screen.getByTestId('appWrapper')).toBeInTheDocument();
  });

  it('should render todopage', () => {
    renderComponent();

    expect(screen.getByTestId('TodoPageWrapper')).toBeInTheDocument();
  });

  it('should have class and text', () => {
    renderComponent();

    const link = screen.getByTestId('styledLink').querySelector('a');
    expect(link).toHaveClass('some-class');
    expect(screen.getByText('Some text here')).toBeInTheDocument();
  });

  it('should not render hello Im showing', () => {
    renderComponent();

    expect(screen.queryByText('Hello I\'m showing!')).not.toBeInTheDocument();
  });
});
