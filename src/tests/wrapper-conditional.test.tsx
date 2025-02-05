import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import { WrapperConditional } from "../components/wrapper-conditional";

const text = "lorem ipsum";

describe(`wrapper-conditional`, () => {
  test("accepts children", () => {
    render(
      <WrapperConditional condition={true} wrapper={<div />}>
        {text}
      </WrapperConditional>
    );
    const lorem = screen.queryByText(text);
    expect(lorem).toBeInTheDocument();
  });

  test("accepts wrapper's children", () => {
    render(<WrapperConditional condition={true} wrapper={<div>{text}</div>} />);
    const lorem = screen.queryByText(text);
    expect(lorem).toBeInTheDocument();
  });

  test("renders wrapper when condition is true", () => {
    render(<WrapperConditional condition={true} wrapper={<h1 />} />);
    const h1 = screen.queryByRole("heading", { level: 1 });
    expect(h1).toBeInTheDocument();
  });

  test("doesn't render wrapper when condition is false", () => {
    render(<WrapperConditional condition={false} wrapper={<h1 />} />);
    const h1 = screen.queryByRole("heading", { level: 1 });
    expect(h1).not.toBeInTheDocument();
  });
});
