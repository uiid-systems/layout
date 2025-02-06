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
      <>
        <Box render={<h1 />} />
        <Box render={() => <h2>{text}</h2>} />
      </>
    );

    const h1 = screen.getByRole("heading", { level: 1 });
    const h2 = screen.getByRole("heading", { level: 2 });
    const lorem = screen.getByText(text);

    expect(h1).toBeInTheDocument();
    expect(h2).toBeInTheDocument();
    expect(lorem).toBeInTheDocument();
  });

  test("supports style props", () => {
    render(<Box data-testid="box" visibility="hidden" />);
    const text = screen.getByTestId("box");
    expect(text).toHaveStyle("visibility: hidden");
  });

  // test("supports ref", () => {
  //   const ref = createRef();
  //   render(<Box data-testid="box" ref={ref} />);
  //   const element = screen.getByTestId("box");
  //   expect(ref.current).toBe(element);
  // });
});
