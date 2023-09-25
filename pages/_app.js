import GlobalStyle from "../styles";
import { Montserrat } from "next/font/google";
import { SWRConfig } from "swr";
import Layout from "@/components/Layout/Layout";
import useSWR from "swr";

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

const URL = "https://example-apis.vercel.app/api/art";

// const montserrat = Montserrat({
//   weight: ["400", "500", "700"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
// });

export default function App({ Component, pageProps }) {
  const { data, error, isLoading, isValidating } = useSWR(URL, fetcher);

  if (isLoading) return <p>IsLoading....</p>;
  if (error) return <p>Error Loading data:{error.message}</p>;

  // waiting for implementation of the state, functionality still build.
  const artPieceInfo = [{ slug: "blue-and-red", isFavorite: true }];

  const favoritePages = data.filter((artPiece) => {
    return artPieceInfo.some((element) => {
      return (artPiece.slug === element.slug) & element.isFavorite;
    });
  });

  return (
    <SWRConfig>
      <Layout>
        <GlobalStyle />
        {<Component {...pageProps} data={data} favorites={favoritePages} />}
      </Layout>
    </SWRConfig>
  );
}
