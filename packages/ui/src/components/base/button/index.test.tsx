import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ButtonPrimary } from './index';

describe('<ButtonPrimary /> Component', () => {
  it('Should renders with correct text title', () => {
    render(<ButtonPrimary title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('Should triggers onClick handler', async () => {
    const handleClick = vi.fn();
    render(<ButtonPrimary title="Click me" onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /Click me/i });
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});
