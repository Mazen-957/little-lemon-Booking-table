import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm labels correctly", () => {
  render(<BookingForm />);
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});
