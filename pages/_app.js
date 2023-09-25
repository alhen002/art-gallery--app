import GlobalStyle from "../styles";
import { Montserrat } from "next/font/google";
import { SWRConfig } from "swr";
import Layout from "@/components/Layout/Layout";
import useSWR from "swr";
import { useState } from "react";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");

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
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  function handleToggleFavorite() {
    console.log("click");
    // const info = artPiecesInfo.find((info) => info.slug === slug);

    // if (info) {
    //   setArtPiecesInfo(
    //     artPiecesInfo.map((artPieceInfo) =>
    //       artPieceInfo.slug === slug
    //         ? { slug, isFavorite: !artPieceInfo.isFavorite }
    //         : artPieceInfo
    //     )
    //   );
    // } else setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
  }

  if (isLoading) return <p>IsLoading....</p>;
  if (error) return <p>Error Loading data:{error.message}</p>;

  return (
    <SWRConfig>
      <Layout>
        <GlobalStyle />
        {
          <Component
            {...pageProps}
            data={data}
            artPiecesInfo={artPiecesInfo}
            onToggleFavorite={handleToggleFavorite}
          />
        }
      </Layout>
    </SWRConfig>
  );
}
