import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    console.log(error);
    throw error;
  }
  return response.json();
};

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig>
      <GlobalStyle
        value={{
          fetcher,
          refreshInterval: 5000,
        }}
      />
      <Component {...pageProps} />
    </SWRConfig>
  );
}
