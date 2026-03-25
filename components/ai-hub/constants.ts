export const AIRTABLE_FORM_URL =
  "https://airtable.com/appx0X0s7wehVPVyv/pagTJ3jdNsuDWiMrz/form";

export const ASSETS = {
  headerLogo:
    "https://ai.hamburg/wp-content/uploads/2025/11/AI.HUB_-1920x392.png",
  heroLogo:
    "https://ai.hamburg/wp-content/uploads/2025/11/AI.HUB_-scaled.png",
  heroBg:
    "https://ai.hamburg/wp-content/uploads/2025/11/AI.HUB-Landingpage-Hero-Section-Image-1.png",
  implementationBg:
    "https://ai.hamburg/wp-content/uploads/2025/11/AI.HUB_LandingPage_SektionsBackground_KI_Implementation.png",
  implementationDiagram:
    "https://ai.hamburg/wp-content/uploads/2025/11/AI.HUB_LandingPage_Grafik_KI_Implementation.png",
} as const;

export type YoutubeClip = {
  id: string;
  startSeconds: number;
  title: string;
};

/** Curated clips for the landing page carousel (preserves watch URL start times). */
export const YOUTUBE_CLIPS: YoutubeClip[] = [
  {
    id: "7HGbWNraToQ",
    startSeconds: 55,
    title: "Video 1",
  },
  {
    id: "gsrex2sM5aw",
    startSeconds: 25,
    title: "Video 2",
  },
  {
    id: "bNyjDNa3RFA",
    startSeconds: 0,
    title: "Video 3",
  },
  {
    id: "TKnPRfo_dRk",
    startSeconds: 116,
    title: "Video 4",
  },
];

export function youtubeEmbedSrc(clip: YoutubeClip): string {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    autoplay: "0",
  });
  if (clip.startSeconds > 0) {
    params.set("start", String(clip.startSeconds));
  }
  return `https://www.youtube-nocookie.com/embed/${clip.id}?${params.toString()}`;
}

export const TRAINERS = [
  {
    name: "Tim Cortinovis",
    image:
      "https://ai.hamburg/wp-content/uploads/elementor/thumbs/AI.HUB-Tim-Cortinovis-rexjwo6k0rvc8q02ap477h7tcr6djommvkaekdyb4g.png",
    href: "https://ai.hamburg/de/tim-cortinovis/",
  },
  {
    name: "Gunnar Brune",
    image:
      "https://ai.hamburg/wp-content/uploads/elementor/thumbs/AI.HUB-Gunnar-Brune-rexjwes64fih0mdptl1xijl7ewgpeplbi9rjrmc8uo.png",
    href: "https://ai.hamburg/de/gunnar-brune/",
  },
  {
    name: "Felix Broßmann",
    image:
      "https://ai.hamburg/wp-content/uploads/elementor/thumbs/AI.HUB-Felix-Brossmann-rexjwa2z69c1ekkjl10so2rwfz3vc82ntmi4d8j7ps.png",
    href: "https://ai.hamburg/de/felix-brossmann/",
  },
  {
    name: "Prof. Dr. Christoph Bauer",
    image:
      "https://ai.hamburg/wp-content/uploads/elementor/thumbs/AI.HUB-Christoph-Bauer-rexjw79glr86fqon1hswylhinthrp4rgt8jnxene8g.png",
    href: "https://ai.hamburg/de/christoph-bauer/",
  },
  {
    name: "Wiebke Apitzsch",
    image:
      "https://ai.hamburg/wp-content/uploads/elementor/thumbs/AI.HUB-Apitzsch-rexjw4fy194bgwsqhyl19474vnvo21g9sul7hkrkr4.png",
    href: "https://ai.hamburg/de/wiebke-apitzsch/",
  },
] as const;
