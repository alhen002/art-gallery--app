import { ArtPieces } from "@/components/ArtPieces/ArtPieces";

export default function Favorites({ favorites }) {
  return <ArtPieces pieces={favorites} />;
}
