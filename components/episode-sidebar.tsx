"use client";

import { useParams } from "next/navigation";
import { seriesCatalog } from "@/data/series";
import { EpisodeList } from "@/components/episode-list";

export function EpisodeSidebar() {
  const { slug, episode: episodeParam } = useParams<{
    slug: string;
    episode: string;
  }>();
  const series = seriesCatalog.find((item) => item.slug === slug);
  const episodeNumber = /^\d+$/.test(episodeParam)
    ? Number(episodeParam)
    : NaN;

  if (!series || !series.episodes.some((item) => item.number === episodeNumber)) {
    return null;
  }

  return (
    <aside className="episode-sidebar" aria-labelledby="episode-list-title">
      <div className="episode-list-heading">
        <div>
          <p className="eyebrow">Series</p>
          <h2 id="episode-list-title">Episodes</h2>
        </div>
        <span>{series.episodes.length}</span>
      </div>

      <EpisodeList
        episodes={series.episodes}
        seriesSlug={series.slug}
        currentEpisodeNumber={episodeNumber}
      />
    </aside>
  );
}
