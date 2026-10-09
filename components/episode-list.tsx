"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Episode } from "@/data/series";

type EpisodeListProps = {
  episodes: Episode[];
  seriesSlug: string;
  currentEpisodeNumber: number;
};

export function EpisodeList({
  episodes,
  seriesSlug,
  currentEpisodeNumber,
}: EpisodeListProps) {
  const listRef = useRef<HTMLOListElement>(null);
  const currentEpisodeRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const list = listRef.current;
    const currentEpisode = currentEpisodeRef.current;

    if (!list || !currentEpisode) {
      return;
    }

    const revealCurrentEpisode = () => {
      if (list.scrollHeight <= list.clientHeight) return;

      const listBounds = list.getBoundingClientRect();
      const episodeBounds = currentEpisode.getBoundingClientRect();

      if (episodeBounds.top < listBounds.top) {
        list.scrollTop -= listBounds.top - episodeBounds.top;
      } else if (episodeBounds.bottom > listBounds.bottom) {
        list.scrollTop += episodeBounds.bottom - listBounds.bottom;
      }
    };

    revealCurrentEpisode();

    const resizeObserver = new ResizeObserver(revealCurrentEpisode);
    resizeObserver.observe(list);

    return () => resizeObserver.disconnect();
  }, [currentEpisodeNumber]);

  return (
    <ol className="episode-list" ref={listRef}>
      {episodes.map((episode) => {
        const isCurrent = episode.number === currentEpisodeNumber;

        return (
          <li key={episode.number}>
            <Link
              ref={isCurrent ? currentEpisodeRef : undefined}
              className={`episode-list-item${isCurrent ? " is-current" : ""}`}
              href={`/series/${seriesSlug}/episode/${episode.number}`}
              aria-current={isCurrent ? "page" : undefined}
            >
              <span className="episode-number">
                {String(episode.number).padStart(2, "0")}
              </span>
              <span className="episode-list-copy">
                <strong>{episode.title}</strong>
                <span>
                  {isCurrent ? "Now playing" : `Episode ${episode.number}`}
                </span>
              </span>
              {isCurrent && (
                <span className="playing-indicator" aria-hidden="true">
                  ●
                </span>
              )}
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
