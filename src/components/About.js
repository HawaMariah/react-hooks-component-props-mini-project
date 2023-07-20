// About.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../About"

test("renders a <img> with the blog logo and alt text of 'blog logo'", () => {
  render(<About />); 
  const img = screen.queryByAltText("blog logo");
  expect(img).toBeInTheDocument();
  expect(img.src).toContain("https://via.placeholder.com/215"); 
});
