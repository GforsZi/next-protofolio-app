import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/icon/iconweb.png" />
      </Head>
      <body style={{ backgroundColor: "rgb(16, 16, 16)" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
