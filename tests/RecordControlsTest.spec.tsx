import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RecordControls } from "../src/components/RecordControls";
import type { Movie } from "../src/interfaces/movie";

describe("RecordControlsTest", () => {
    const mockMovie: Movie = {
        id: "test-movie-123",
        title: "The Test Movie",
        rating: 8,
        description: "A movie for testing",
        released: 2020,
        soundtrack: [{ id: "song1", name: "Test Song", by: "Test Artist" }],
        watched: {
            seen: true,
            liked: true,
            when: "2023-01-01",
        },
    };

    test("Toggle watch status", () => {
        render(<RecordControls
            watched={mockMovie.watched}
            changeEditing={jest.fn()}
            setMovieWatched={jest.fn()}
        ></RecordControls>)
        const watchedButton = screen.getByRole("button", { name: /mark as watched/i })
        expect(watchedButton).toBeInTheDocument();
        userEvent.click(watchedButton);
    });
})