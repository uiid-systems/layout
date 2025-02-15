import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import { Switch } from "../components/switch";

const true_text = "true";
const false_text = "false";

describe(`wrapper-switch`, () => {
  test("accepts children", () => {
    render(
      <Switch condition={true} wrappers={{ true: <h1 />, false: <h2 /> }}>
        {true_text}
      </Switch>
    );
    const lorem = screen.getByText(true_text);
    const h1 = screen.getByRole("heading", { level: 1 });

    expect(lorem).toBeInTheDocument();
    expect(h1).toBeInTheDocument();
  });

  test("accepts wrapper children", () => {
    render(
      <Switch
        condition={true}
        wrappers={{ true: <h1>{true_text}</h1>, false: <h2 /> }}
      />
    );
    const trueElement = screen.queryByText(true_text);

    const h1 = screen.queryByRole("heading", { level: 1 });
    const h2 = screen.queryByRole("heading", { level: 2 });

    expect(trueElement).toBeInTheDocument();
    expect(h1).toBeInTheDocument();

    expect(h2).not.toBeInTheDocument();
  });

  test("renders false wrapper", () => {
    render(
      <Switch
        condition={false}
        wrappers={{ true: <h1>{true_text}</h1>, false: <h2>{false_text}</h2> }}
      />
    );
    const trueElement = screen.queryByText(true_text);
    const falseElement = screen.queryByText(false_text);

    const h1 = screen.queryByRole("heading", { level: 1 });
    const h2 = screen.queryByRole("heading", { level: 2 });

    expect(falseElement).toBeInTheDocument();
    expect(h2).toBeInTheDocument();

    expect(trueElement).not.toBeInTheDocument();
    expect(h1).not.toBeInTheDocument();
  });
});
