  import type { Metadata } from "next";
  import { Inter } from "next/font/google";
  import "@/styles/globals.css";
  import { NextIntlClientProvider, useMessages } from "next-intl";

  const inter = Inter({ subsets: ["latin"] });

  export const metadata: Metadata = {
    title: "Felipe Versiane",
    description: "Back-end Developer",
  };

  const locales = ["pt-BR", "en-US"];
  export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
  }

  type Props = {
    children: React.ReactNode;
    params: {
      locale: "en-US" | "pt-BR";
    };
  };

  const RootLayout: React.FC<Props> = ({ children, params: { locale } }) => {
    const messages = useMessages();
    return (
      <html lang={locale} suppressHydrationWarning>
        <head>
          <link rel="shortcut icon" href="/icons/brand/favicon.svg" type="image/svg+xml" />
        </head>
        <body className={inter.className}>
          <NextIntlClientProvider messages={messages}>
            <main>{children}</main>
          </NextIntlClientProvider>
        </body>
      </html>
    );
  };
  export default RootLayout;
