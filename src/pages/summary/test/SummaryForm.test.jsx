import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

describe('testing summary form button', () => {
  test('checks if checkbox is unchecked by default', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();
  });

  test('checking box enables button and unchecking disables button again', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox');
    const button = screen.getByRole('button', { name: /confirm order/i });
    fireEvent.click(checkbox);
    expect(button).toBeEnabled();
    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
  });
});
