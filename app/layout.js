import './globals.css'

export const metadata = {
  title: 'Next Level Food App',
  description: 'My first NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
