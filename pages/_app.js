import GlobalStyle from "../styles";
import { Montserrat } from "next/font/google";
import { SWRConfig } from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
  return response.json();
};

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <main className={montserrat.className}>
        <GlobalStyle />
        <Component {...pageProps} />
      </main>
    </SWRConfig>
  );
}
