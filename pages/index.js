import useSWR from "swr";
import ArtPiecePreview from "@/components/ArtPiecePreview/ArtPiecePreview";
import { ArtPieces } from "@/components/ArtPieces/ArtPieces";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
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

  const { data, error, isLoading, isValidating } = useSWR(URL, fetcher);

  console.log({ data });

  if (!data) {
    return <h1>Loading...</h1>;
  }

  console.log({ data });

  return (
    <>
      {isLoading && <h1>isLoading....</h1>}
      {error && <h1>Error</h1>}
      {data && (
        <>
          <ArtPieces data={data} />
        </>
      )}
    </>
  );
}
