import { render, screen } from "@testing-library/react";

import App from "./app";

test("renders App component", async () => {
  render(<App />);
  const marvelLogo = screen.getByAltText("marvel home");

  expect(marvelLogo).toBeInTheDocument();
});
