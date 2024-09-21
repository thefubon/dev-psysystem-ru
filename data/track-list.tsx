// /data/track-list.tsx

export interface Track {
  id: number;
  src: string;
  preview: string;
  duration: number;
  title: string;
  artists: string;
  data?: string;
  new?: boolean;
}

export const tracks: Track[] = [
  {
    id: 1,
    src: "https://cdn.fubon.ru/audio/yagelproject-teachers-preach.mp3",
    preview: "/cover/teachers-preach.png",
    duration: 492,
    title: "Teacher's Preach",
    artists: "yagelProject",
    data: "11.06.2013",
    new: false,
  },

  {
    id: 2,
    src: "https://cdn.fubon.ru/audio/perekati-pole-tichaya-pravda.mp3",
    preview: "/cover/tichaya-pravda.png",
    duration: 204,
    title: "Тихая правда",
    artists: "Перекати поле",
    data: "20.07.2015",
    new: false,
  },

  {
    id: 3,
    src: "https://cdn.fubon.ru/audio/yagelproject-black-beach.mp3",
    preview: "/cover/black-beach.png",
    duration: 167,
    title: "Black Beach",
    artists: "yagelProject",
    data: "28.12.2019",
    new: false,
  },

  {
    id: 4,
    src: "https://cdn.fubon.ru/audio/yagelproject-mama-ya-tancuyu.mp3",
    preview: "/cover/mama-ya-tancuyu.png",
    duration: 219,
    title: "Мама, Я Танцую",
    artists: "#2Маши & yagelProject",
    data: "17.07.2019",
    new: false,
  },

  {
    id: 5,
    src: "https://cdn.fubon.ru/audio/yagelproject-eximinds-trance.mp3",
    preview: "/cover/eximinds-trance.png",
    duration: 314,
    title: "Eximinds Trance",
    artists: "yagelProject",
    data: "08.08.2019",
    new: false,
  },

  {
    id: 6,
    src: "https://cdn.fubon.ru/audio/yagelproject-big-tree.mp3",
    preview: "/cover/big-tree.png",
    duration: 110,
    title: "Big Tree",
    artists: "yagelProject",
    data: "12.08.2019",
    new: false,
  },

  {
    id: 7,
    src: "https://cdn.fubon.ru/audio/yagelproject-atmosphere.mp3",
    preview: "/cover/atmosphere.png",
    duration: 192,
    title: "Atmosphere",
    artists: "yagelProject",
    data: "16.08.2019",
    new: false,
  },

  {
    id: 8,
    src: "https://cdn.fubon.ru/audio/yagelproject-sunset.mp3",
    preview: "/cover/sunset.png",
    duration: 403,
    title: "SunSet",
    artists: "yagelProject",
    data: "23.08.2019",
    new: false,
  },

  {
    id: 9,
    src: "https://cdn.fubon.ru/audio/yagelproject-prey.mp3",
    preview: "/cover/prey.png",
    duration: 294,
    title: "Prey",
    artists: "yagelProject",
    data: "25.09.2019",
    new: false,
  },

  {
    id: 10,
    src: "https://cdn.fubon.ru/audio/yagelproject-by-my-side.mp3",
    preview: "/cover/by-my-side.png",
    duration: 336,
    title: "By My Side",
    artists: "yagelProject",
    data: "01.05.2020",
    new: false,
  },

  {
    id: 11,
    src: "https://cdn.fubon.ru/audio/thefubon-sunset-extented-version.mp3",
    preview: "/cover/sunset-extended-version.png",
    duration: 403,
    title: "SunSet (Extended)",
    artists: "TheFubon",
    data: "09.02.2021",
    new: false,
  },

  {
    id: 12,
    src: "https://cdn.fubon.ru/audio/thefubon-feelings-of-youth.mp3",
    preview: "/cover/feelings-of-youth.png",
    duration: 409,
    title: "Feelings of Youth",
    artists: "TheFubon",
    data: "13.02.2021",
    new: false,
  },

  {
    id: 13,
    src: "https://cdn.fubon.ru/audio/thefubon-where-did-you-go.mp3",
    preview: "/cover/where-did-you-go.png",
    duration: 338,
    title: "Where Did You Go",
    artists: "TheFubon",
    data: "08.07.2022",
    new: false,
  },

  {
    id: 14,
    src: "https://cdn.fubon.ru/audio/thefubon-your-love.mp3",
    preview: "/cover/your-love.png",
    duration: 232,
    title: "Your Love",
    artists: "TheFubon",
    data: "11.07.2022",
    new: false,
  },

  {
    id: 15,
    src: "https://cdn.fubon.ru/audio/thefubon-deeper-house.mp3",
    preview: "/cover/deeper-house.png",
    duration: 309,
    title: "Deeper House",
    artists: "TheFubon",
    data: "16.09.2022",
    new: false,
  },

  {
    id: 16,
    src: "https://cdn.fubon.ru/audio/thefubon-retrospective.mp3",
    preview: "/cover/retrospective.png",
    duration: 293,
    title: "Retrospective",
    artists: "TheFubon",
    data: "16.09.2022",
    new: false,
  },

  {
    id: 17,
    src: "https://cdn.fubon.ru/audio/thefubon-until.mp3",
    preview: "/cover/until.png",
    duration: 128,
    title: "Until",
    artists: "TheFubon",
    data: "16.09.2022",
    new: false,
  },

  {
    id: 18,
    src: "https://cdn.fubon.ru/audio/thefubon-under-the-stars.mp3",
    preview: "/cover/under-the-stars.png",
    duration: 219,
    title: "Under The Stars",
    artists: "TheFubon",
    data: "24.09.2022",
    new: false,
  },

  {
    id: 19,
    src: "https://cdn.fubon.ru/audio/thefubon-quantum.mp3",
    preview: "/cover/quantum.png",
    duration: 385,
    title: "Quantum",
    artists: "TheFubon",
    data: "24.09.2022",
    new: false,
  },

  {
    id: 20,
    src: "https://cdn.fubon.ru/audio/thefubon-soul-of-space.mp3",
    preview: "/cover/soul-of-space.png",
    duration: 130,
    title: "Soul of Space",
    artists: "TheFubon",
    data: "11.11.2022",
    new: false,
  },

  {
    id: 21,
    src: "https://cdn.fubon.ru/audio/thefubon-fun-at-noise.mp3",
    preview: "/cover/fun-at-noise.png",
    duration: 183,
    title: "Fun At Noise",
    artists: "TheFubon",
    data: "11.11.2022",
    new: false,
  },

  {
    id: 22,
    src: "https://cdn.fubon.ru/audio/thefubon-flying-phoenix.mp3",
    preview: "/cover/flying-pohenix.png",
    duration: 140,
    title: "Flying Phoenix",
    artists: "TheFubon",
    data: "25.11.2022",
    new: false,
  },

  {
    id: 23,
    src: "https://cdn.fubon.ru/audio/thefubon-time-for-freedom.mp3",
    preview: "/cover/time-for-freedom.png",
    duration: 215,
    title: "Time For Freedom",
    artists: "TheFubon",
    data: "25.11.2022",
    new: false,
  },

  {
    id: 24,
    src: "https://cdn.fubon.ru/audio/thefubon&jazz-soul-sentimental-moods.mp3",
    preview: "/cover/sentimental-moods.png",
    duration: 239,
    title: "Sentimental Moods",
    artists: "TheFubon & Jazz Soul",
    data: "26.12.2022",
    new: false,
  },

  {
    id: 25,
    src: "https://cdn.fubon.ru/audio/thefubon-ambient.mp3",
    preview: "/cover/TheFubon-Ambient.png",
    duration: 332,
    title: "Ambient",
    artists: "TheFubon",
    data: "28.02.2023",
    new: false,
  },

  {
    id: 26,
    src: "https://cdn.fubon.ru/audio/harda&pixel-dance-all-night.mp3",
    preview: "/cover/dance-all-night.png",
    duration: 235,
    title: "Dance All Night",
    artists: "Hard & Pixel",
    data: "21.05.2024",
    new: false,
  },

  {
    id: 27,
    src: "https://cdn.fubon.ru/audio/jynthara-universal-trance-001.mp3",
    preview: "/cover/jynthara-universal-trance-001.png",
    duration: 235,
    title: "Universal Trance #001",
    artists: "Jynthara",
    data: "13.09.2024",
    new: true,
  },
];
