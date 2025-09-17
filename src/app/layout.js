import './globals.css';

export const metadata = {
  title: 'WIE ESSTHS',
  description: 'Women In Engneering',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
