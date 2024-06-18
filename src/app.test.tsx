import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App component", async () => {
  render(<App />);
  const marvelLogo = screen.getByAltText("marvel home");

  expect(marvelLogo).toBeInTheDocument();
});
