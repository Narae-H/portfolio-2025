import type { Metadata } from "next";
import { DEFAULT_THEME, THEME_KEY } from "@/models/theme";
import { SITE_URL } from "@/constants/constants";
import AppShell from "@/app/components/layout/AppShell";
import { ThemeProvider } from "@/app/components/theme/ThemeProvider";
import StoreProvider from "./StoreProvider";
import "./globals.css";

const siteUrl = SITE_URL;

const description =
  "Full-stack software engineer. A VS Code-themed portfolio showcasing projects across web, cloud, and AI-native engineering.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Narae Hyeon — Portfolio",
    template: "%s | Narae Hyeon",
  },
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Narae Hyeon — Portfolio",
    title: "Narae Hyeon — Portfolio",
    description,
    locale: "en_US",
  },
};

// Runs before hydration so the saved theme is applied to <html> with no flash of the wrong theme.
const themeInitScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
  THEME_KEY
)})||${JSON.stringify(
  DEFAULT_THEME
)};document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen flex flex-col min-w-[360px]">
        <StoreProvider>
          <ThemeProvider>
            <AppShell>{children}</AppShell>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
