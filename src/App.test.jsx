import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the main heading and role", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1, name: /Leonardo de Jesus/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: /primary/i })).toBeInTheDocument();
  });
});
