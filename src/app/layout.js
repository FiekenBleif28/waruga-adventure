import "./globals.css";

export const metadata = {
  title: "Waruga Adventure",
  description: "Website pemesanan arung jeram Waruga Adventure",
  icons: {
    icon: "/google.png",
    shortcut: "/google.png",
    apple: "/google.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/google.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}

