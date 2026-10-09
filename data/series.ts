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
    slug: "suddenly-rich-family",
    title: "暴富一家人",
    description: "An ordinary family suddenly comes into a fortune and discovers that money cannot solve everything. Follow their chaotic attempts to adjust to a life of luxury, one family squabble and awkward misadventure at a time.",
    episodes: [
      {
        number: 1,
        title: "Episode 1",
        source: {
          provider: "douyin",
          videoId: "7649219887503559963",
        },
      },
      {
        number: 2,
        title: "Episode 2",
        source: {
          provider: "douyin",
          videoId: "7649711555487071161",
        },
      },
      {
        number: 3,
        title: "Episode 3",
        source: {
          provider: "douyin",
          videoId: "7650435021795815802",
        },
      },
      {
        number: 4,
        title: "Episode 4",
        source: {
          provider: "douyin",
          videoId: "7651566208898072805",
        },
      },
      {
        number: 5,
        title: "Episode 5",
        source: {
          provider: "douyin",
          videoId: "7652208895591918321",
        },
      },
      {
        number: 6,
        title: "Episode 6",
        source: {
          provider: "douyin",
          videoId: "7653006429381683429",
        },
      },
      {
        number: 7,
        title: "Episode 7",
        source: {
          provider: "douyin",
          videoId: "7653684149602120049",
        },
      },
      {
        number: 8,
        title: "Episode 8",
        source: {
          provider: "douyin",
          videoId: "7654523794934369649",
        },
      },
      {
        number: 9,
        title: "Episode 9",
        source: {
          provider: "douyin",
          videoId: "7655256072756327035",
        },
      },
      {
        number: 10,
        title: "Episode 10",
        source: {
          provider: "douyin",
          videoId: "7656689482044894586",
        },
      },
      {
        number: 11,
        title: "Episode 11",
        source: {
          provider: "douyin",
          videoId: "7657467168565667045",
        },
      },
      {
        number: 12,
        title: "Episode 12",
        source: {
          provider: "douyin",
          videoId: "7658192017696239717",
        },
      },
      {
        number: 13,
        title: "Episode 13",
        source: {
          provider: "douyin",
          videoId: "7659338264423690341",
        },
      },
      {
        number: 14,
        title: "Episode 14",
        source: {
          provider: "douyin",
          videoId: "7660104129063257253",
        },
      },
      {
        number: 15,
        title: "Episode 15",
        source: {
          provider: "douyin",
          videoId: "7661950544122084581",
        },
      },
      {
        number: 16,
        title: "Episode 16",
        source: {
          provider: "douyin",
          videoId: "7662678104872408571",
        },
      },
      {
        number: 17,
        title: "Episode 17",
        source: {
          provider: "douyin",
          videoId: "7663428380666294181",
        },
      },
      {
        number: 18,
        title: "Episode 18",
        source: {
          provider: "douyin",
          videoId: "7664550095077480625",
        },
      },
      {
        number: 19,
        title: "Episode 19",
        source: {
          provider: "douyin",
          videoId: "7665277046775531749",
        },
      },
      {
        number: 20,
        title: "Episode 20",
        source: {
          provider: "douyin",
          videoId: "7666060222133831845",
        },
      },
      {
        number: 21,
        title: "Episode 21",
        source: {
          provider: "douyin",
          videoId: "7667511660123260069",
        },
      },
      {
        number: 22,
        title: "Episode 22",
        source: {
          provider: "douyin",
          videoId: "7668250188444220657",
        },
      },
      {
        number: 23,
        title: "Episode 23",
        source: {
          provider: "douyin",
          videoId: "7668621699931587579",
        },
      },
      {
        number: 24,
        title: "Episode 24",
        source: {
          provider: "douyin",
          videoId: "7670113286378126769",
        },
      },
      {
        number: 25,
        title: "Episode 25",
        source: {
          provider: "douyin",
          videoId: "7670846857971292517",
        },
      },
      {
        number: 26,
        title: "Episode 26",
        source: {
          provider: "douyin",
          videoId: "7671564774194582757",
        },
      },
      {
        number: 27,
        title: "Episode 27",
        source: {
          provider: "douyin",
          videoId: "7672328416959524069",
        },
      },
      {
        number: 28,
        title: "Episode 28",
        source: {
          provider: "douyin",
          videoId: "7673071724355873529",
        },
      },
      {
        number: 29,
        title: "Episode 29",
        source: {
          provider: "douyin",
          videoId: "7673848093419480165",
        },
      },
      {
        number: 30,
        title: "Episode 30",
        source: {
          provider: "douyin",
          videoId: "7674927855541286393",
        },
      },
      {
        number: 31,
        title: "Episode 31",
        source: {
          provider: "douyin",
          videoId: "7676410638407258277",
        },
      },
      {
        number: 32,
        title: "Episode 32",
        source: {
          provider: "douyin",
          videoId: "7677150455026254073",
        },
      },
      {
        number: 33,
        title: "Episode 33",
        source: {
          provider: "douyin",
          videoId: "7677882371807549541",
        },
      },
      {
        number: 34,
        title: "Episode 34",
        source: {
          provider: "douyin",
          videoId: "7678637090837764837",
        },
      },
      {
        number: 35,
        title: "Episode 35",
        source: {
          provider: "douyin",
          videoId: "7679378661611645925",
        },
      },
      {
        number: 36,
        title: "Episode 36",
        source: {
          provider: "douyin",
          videoId: "7680492806649402341",
        },
      },
      {
        number: 37,
        title: "Episode 37",
        source: {
          provider: "douyin",
          videoId: "7681235573924215994",
        },
      },
      {
        number: 38,
        title: "Episode 38",
        source: {
          provider: "douyin",
          videoId: "7681927695093421809",
        },
      },
      {
        number: 39,
        title: "Episode 39",
        source: {
          provider: "douyin",
          videoId: "7683095981102146277",
        },
      },
      {
        number: 40,
        title: "Episode 40",
        source: {
          provider: "douyin",
          videoId: "7684224809605495912",
        },
      },
      {
        number: 41,
        title: "Episode 41",
        source: {
          provider: "douyin",
          videoId: "7685691918538468261",
        },
      },
      {
        number: 42,
        title: "Episode 42",
        source: {
          provider: "douyin",
          videoId: "7686436175448690533",
        },
      },
      {
        number: 43,
        title: "Episode 43",
        source: {
          provider: "douyin",
          videoId: "7687913934301496249",
        },
      },
      {
        number: 44,
        title: "Episode 44",
        source: {
          provider: "douyin",
          videoId: "7689039377481323749",
        },
      },
      {
        number: 45,
        title: "Episode 45",
        source: {
          provider: "douyin",
          videoId: "7690892215102953829",
        },
      },
    ],
  },
  {
    slug: "reborn-at-200-jin-c-position-debut",
    title: "重回200斤我C位出道",
    description: "A top idol wakes up back in her 200-pound body, and everyone laughs. They don’t see the performer beneath the ridicule. She’s already planning her comeback—and aiming for the center spot.",
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
