import localFont from "next/font/local";
import { Inter, PT_Serif, Arvo } from "next/font/google";

export const melindaFont = localFont({
  src: "../fonts/MalindaScript.otf",
  weight: "700",
  display: "swap",
});

export const inter = Inter({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const ptSerif = PT_Serif({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export const arvo = Arvo({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
