import Shell from "@/components/layout/shell";
import { useEffect } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("@/js/globals.js");
  }, []);
  return (
    <Shell>
      <Component {...pageProps} />
    </Shell>
  );
}
