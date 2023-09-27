import "./styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "One piece",
  description: "Deslumbre o Mundo Pirata de One Piece começando da primeira saga de East-Blue, tanto no anime como na série da Netflix.",
  viewport: "width=device-width, initial-scale=1.0",
  keywords: "Vitor-HenriqueAS, One Piece, East-Blue, Anime, Série, história"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
