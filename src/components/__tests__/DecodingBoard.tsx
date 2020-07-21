import React from "react";
import { render, screen } from "@testing-library/react";
import { MAX_TURNS } from "../../config/config";
import DecodingBoard from "../DecodingBoard";

describe("DecodingBoard", () => {
  test("Display the total right ammount of max tries", () => {
    render(<DecodingBoard />);
    expect(screen.getAllByTestId("guess-result").length).toEqual(MAX_TURNS);
    expect(screen.getAllByTestId("guess-board").length).toEqual(MAX_TURNS);
  });
});
