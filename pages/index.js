import useSWR from "swr";
import { ArtPieces } from "@/components/ArtPieces/ArtPieces";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, error, isLoading, isValidating } = useSWR(URL);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  if (isLoading) {
    return <h1>Loading data...</h1>;
  }

  return (
    <>
      {/* {isLoading && <h1>isLoading....</h1>} */}
      {error && <h1>Error</h1>}
      {data && <ArtPieces pieces={data} />}
    </>
  );
}
