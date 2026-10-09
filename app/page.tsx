import { SeriesCard } from "@/components/series-card";
import { seriesCatalog } from "@/data/series";

export default function Home() {
  return (
    <main className="home-shell">
      <section className="intro" aria-labelledby="intro-title">
        <p className="eyebrow">Curated AI series from Douyin</p>
        <h1 id="intro-title">
          Find a story.
          <br />
          Stay for the next frame.
        </h1>
        <p className="intro-copy">
          Discover AI-generated series from Douyin, curated for stories that
          keep you watching.
        </p>
      </section>

      <section className="series-section" id="series" aria-labelledby="series-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The collection</p>
            <h2 id="series-heading">Series to get lost in</h2>
          </div>
          <span className="series-total">{String(seriesCatalog.length).padStart(2, "0")} series</span>
        </div>

        {seriesCatalog.length > 0 ? (
          <div className="series-grid">
            {seriesCatalog.map((series) => (
              <SeriesCard key={series.slug} series={series} />
            ))}
          </div>
        ) : (
          <p className="empty-catalogue">The first series is being curated.</p>
        )}
      </section>

      <footer className="home-footer">
        <span>NextFrame</span>
        <span>Stories made to be watched in sequence.</span>
      </footer>
    </main>
  );
}
