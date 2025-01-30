import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import { WrapperSlots } from "../components/wrapper-slots";

const before_text = "before";
const after_text = "after";
const children_text = "children";

describe(`wrapper-slots`, () => {
  test("accepts children", () => {
    render(
      <WrapperSlots
        before={<h1>{before_text}</h1>}
        after={<h2>{after_text}</h2>}
      >
        {children_text}
      </WrapperSlots>
    );
    const before = screen.getByText(before_text);
    const after = screen.getByText(after_text);
    const children = screen.getByText(children_text);
    const h1 = screen.getByRole("heading", { level: 1 });
    const h2 = screen.getByRole("heading", { level: 2 });

    expect(before).toBeInTheDocument();
    expect(after).toBeInTheDocument();
    expect(children).toBeInTheDocument();
    expect(h1).toBeInTheDocument();
    expect(h2).toBeInTheDocument();
  });
});
