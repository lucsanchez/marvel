import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

const mocks = vi.hoisted(() => {
  return {
    navigate: vi.fn()
  };
});

vi.mock("react-router-dom", async (importOriginal) => {
  const rrd = await importOriginal<typeof import("react-router-dom")>();
  return {
    ...rrd,
    useNavigate: vi.fn(() => mocks.navigate)
  };
});

afterEach(() => {
  cleanup();
});
