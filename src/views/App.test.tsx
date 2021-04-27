import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { Provider } from 'react-redux';
import { store } from '../store/store';

test('Show Login page and go to dashboard by click on login', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const loginButton = await screen.findByRole('button', { name: /login/i });
  expect(loginButton).toBeInTheDocument();
  userEvent.click(loginButton);
  const dashboard = await screen.findByRole('link', { name: /dashboard/i });
  expect(dashboard).toBeInTheDocument();
});
