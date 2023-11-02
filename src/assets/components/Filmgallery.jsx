import FilmCard from "./FilmCard";
import movies from "../data/movieData.json";
import { useState } from "react";
import Button from "./Button";

export default function FilmGallery() {
  const [sortedMovies, setSortedMovies] = useState([...movies]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  // Sortieren nach Titel (A-Z)
  const sortAZ = () => {
    console.log("Sortiere A-Z");
    const sorted = [...sortedMovies].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setSortedMovies(sorted);
  };
  console.log(sortedMovies);
  // Sortieren nach Titel (Z-A)
  const sortZA = () => {
    const sorted = [...sortedMovies].sort((a, b) =>
      b.title.localeCompare(a.title)
    );
    setSortedMovies(sorted);
  };

  // Sortieren nach Erscheinungsjahr (neuester zuerst)
  const sortNewestFirst = () => {
    const sorted = [...sortedMovies].sort((a, b) => b.year - a.year);
    setSortedMovies(sorted);
  };

  // Sortieren nach Erscheinungsjahr (ältester zuerst)
  const sortOldestFirst = () => {
    const sorted = [...sortedMovies].sort((a, b) => a.year - b.year);
    setSortedMovies(sorted);
  };

  // Sortieren nach Bewertung (beste zuerst)
  const sortBestRatingFirst = () => {
    const sorted = [...sortedMovies].sort((a, b) => b.rate - a.rate);
    setSortedMovies(sorted);
  };

  // Sortieren nach Genre
  const sortGenres = () => {
    const sorted = [...sortedMovies].sort((a, b) => {
      const genreA = a.genre.join(", "); // Kombiniere Genres zu einer Zeichenfolge
      const genreB = b.genre.join(", ");

      return genreA.localeCompare(genreB);
    });

    setSortedMovies(sorted);
  };

  const filterByGenre = (genre) => {
    if (genre === selectedGenre) {
      // Wenn das ausgewählte Genre bereits ausgewählt ist, zeige alle Filme
      setSelectedGenre(null);
      setSortedMovies([...movies]);
    } else {
      // Andernfalls filtere die Filme nach dem ausgewählten Genre
      setSelectedGenre(genre);
      const filtered = movies.filter((movie) => movie.genre.includes(genre));
      setSortedMovies(filtered);
    }
  };
  return (
    <>
      <section className="flex flex-row gap-5 justify-center mt-5">
        <Button text="Sortieren (A-Z)" onClick={sortAZ} />
        <Button text="Sortieren (Z-A)" onClick={sortZA} />
        <Button text="Sortieren (Neuester zuerst)" onClick={sortNewestFirst} />
        <Button text="Sortieren (Ältester zuerst)" onClick={sortOldestFirst} />
        <Button
          text="Sortieren (Beste Bewertung)"
          onClick={sortBestRatingFirst}
        />
        <Button text="Sortieren (Genre)" onClick={sortGenres} />
      </section>
      <section className="grid grid-cols-3 gap-14 py-5 px-10">
        {sortedMovies.map((item, index) => (
          <FilmCard key={index} film={item} onGenreClick={filterByGenre} />
        ))}
      </section>
    </>
  );
}
