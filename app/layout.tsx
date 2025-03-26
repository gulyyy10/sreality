// app/layout.tsx

export const metadata = {
  title: 'Reality na splátky',
  description: 'Kompletní projekt webu pro zprostředkování nemovitostí na splátky.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <head />
      <body>{children}</body>
    </html>
  );
}
