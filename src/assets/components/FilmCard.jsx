export default function FilmCard(props) {
  const genres = props.film.genre.map((genre, index) => (
    <button
      className="bg-slate-600 py-1 px-2 rounded text-white"
      key={index}
      onClick={() => props.onGenreClick(genre)}
    >
      {genre}
    </button>
  ));

  return (
    <article className="flex flex-col text-center gap-2 rounded-xl bg-slate-400 py-5 px-5">
      <h2>{props.film.title}</h2>
      <p>{props.film.year}</p>
      <p>{props.film.director}</p>
      <p>{props.film.duration}</p>
      <p>{props.film.rate}</p>
      <div className="grid grid-cols-3 gap-2">{genres}</div>
      <p className="text-slate-300 text-sm">
        for genre filter just click the on the genre you want
      </p>
    </article>
  );
}
