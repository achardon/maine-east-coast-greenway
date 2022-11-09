import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Stories from "./Stories";

test("displays the text 'stories'", () => {
   render(<Stories />);

   expect(screen.queryByText("Stories")).toBeInTheDocument();