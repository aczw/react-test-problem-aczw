import { render, screen, fireEvent } from '@testing-library/react';

// import your story from App.stories.js
import { Default } from './App.stories';

// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library

test("button initially says 'click me'", () => {
    render(<Default/>);
    expect(screen.getByRole("button").textContent).toBe("click me");
});

test("button text changes to 'thanks' after click", () => {
    render(<Default/>);
    expect(screen.getByRole("button").textContent).toBe("click me");
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button").textContent).not.toBe("click me");
    expect(screen.getByRole("button").textContent).toBe("thanks");
});
