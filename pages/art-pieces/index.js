import { ArtPieces } from "@/components/ArtPieces/ArtPieces";

export default function Page({ data }) {
  return data && <ArtPieces pieces={data} />;
}
