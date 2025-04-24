import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import { Box } from "../components/box";

const text = "lorem ipsum";

describe(`box`, () => {
  test("accepts children", () => {
    render(<Box>{text}</Box>);
    const lorem = screen.getByText(text);
    expect(lorem).toBeInTheDocument();
  });

  test("supports render prop", () => {
    render(
      <Box
        render={<h1>{text}</h1>}
        className="hidden"
        style={{ display: "block" }}
      />
    );

    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveClass("hidden");
    expect(h1).toHaveStyle("display: block;");
    expect(h1).toHaveTextContent(text);
  });

  // test ref
  // test toggle props
});
