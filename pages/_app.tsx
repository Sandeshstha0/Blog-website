import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="container mx-auto font-sans">
        <nav>This is out nav</nav>
        <main>
        <Component {...pageProps} />
        </main>
        <footer>This is out footer</footer>
      </div>
    </>
  );
}
