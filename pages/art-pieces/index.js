import useSWR from "swr";
import { ArtPieces } from "@/components/ArtPieces/ArtPieces";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL);

  if (!data || isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {error && <h1>Error</h1>}
      {data && <ArtPieces pieces={data} />}
    </>
  );
}
