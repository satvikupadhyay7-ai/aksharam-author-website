import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'अक्षरम् — The Living Library',
  description: 'A home for Hindi and Sanskrit literature, poetry, and the written word.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
