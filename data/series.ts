export type EpisodeVideoSource = {
  provider: "douyin";
  /** Public Douyin video ID used to construct the official iframe player URL. */
  videoId: string;
  /** Optional dimensions returned by Douyin's iframe-player API. */
  videoWidth?: number;
  videoHeight?: number;
};

export type Episode = {
  number: number;
  title: string;
  thumbnail?: string;
  source: EpisodeVideoSource;
  previewUrl?: string;
};

export type Series = {
  /** Stable URL segment, for example "the-last-human". */
  slug: string;
  title: string;
  description: string;
  thumbnail?: string;
  episodes: Episode[];
};

/**
 * Curated series rendered by the site. Add catalogue entries here as they are
 * ready; keep episode numbers ordered and use public paths for local artwork.
 */
export const seriesCatalog: Series[] = [
  {
    slug: "reborn-at-200-jin-c-position-debut",
    title: "重回200斤我C位出道",
    description: "Episodes 1 to 5",
    episodes: [
      {
        number: 1,
        title: "Episode 1",
        source: {
          provider: "douyin",
          videoId: "7682364617943568870",
        },
      },
      {
        number: 2,
        title: "Episode 2",
        source: {
          provider: "douyin",
          videoId: "7686077962215938981",
        },
      },
      {
        number: 3,
        title: "Episode 3",
        source: {
          provider: "douyin",
          videoId: "7688314671787594939",
        },
      },
      {
        number: 4,
        title: "Episode 4",
        source: {
          provider: "douyin",
          videoId: "7691230455907244709",
        },
      },
      {
        number: 5,
        title: "Episode 5",
        source: {
          provider: "douyin",
          videoId: "7693855087457789157",
        },
      },
    ],
  },
];
