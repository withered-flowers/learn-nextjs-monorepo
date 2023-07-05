import './global.css';

export const metadata = {
  title: 'Todos App',
  description: 'withered-flowers @ 2023',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 p-4">{children}</body>
    </html>
  );
}
