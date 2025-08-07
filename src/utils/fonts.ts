import { Public_Sans, Timmana } from "next/font/google";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
});

const timmana = Timmana({
  variable: "--font-timmana",
  weight: ["400"],
  subsets: ["latin"],
});

export { publicSans, timmana };
