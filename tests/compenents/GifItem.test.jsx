import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("GifItem", () => {
  test("Debe coincidir con el snapshot", () => {
    const { container } = render(<GifItem title="title" url="url" />);
    expect(container).toMatchSnapshot();
  });
});
