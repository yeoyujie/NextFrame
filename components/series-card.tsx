import Link from "next/link";
import type { Series } from "@/data/series";

type SeriesCardProps = {
  series: Series;
};

export function SeriesCard({ series }: SeriesCardProps) {
  const firstEpisode = series.episodes[0];

  if (!firstEpisode) return null;

  return (
    <Link
      className="series-card"
      href={`/series/${series.slug}/episode/${firstEpisode.number}`}
      aria-label={`Watch ${series.title}, starting with episode ${firstEpisode.number}`}
    >
      <div className="series-artwork" aria-hidden="true">
        {series.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={series.thumbnail} alt="" />
        ) : (
          <div className="series-artwork-fallback">
            <span className="artwork-kicker">NextFrame · Series</span>
            <span className="artwork-title">{series.title}</span>
            <span className="artwork-count">
              {series.episodes.length} episodes
            </span>
          </div>
        )}
        <span className="card-play" aria-hidden="true">▶</span>
      </div>
      <div className="series-card-copy">
        <div>
          <h3>{series.title}</h3>
          <p>{series.description}</p>
        </div>
        <span className="series-card-action">Watch series <span aria-hidden="true">↗</span></span>
      </div>
    </Link>
  );
}
