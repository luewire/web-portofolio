import { Metadata } from 'next';
import { Archivo_Black, Bebas_Neue, DM_Serif_Display, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
});

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
  variable: '--font-dm-serif-display',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'RIDHO — Web Developer & UI/UX Designer',
  description: 'Digital reading platforms, pixel art games, and brand identities.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSerifDisplay.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-void text-bone antialiased selection:bg-electric-lime selection:text-void">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
