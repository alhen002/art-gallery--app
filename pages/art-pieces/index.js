import { ArtPieces } from "@/components/ArtPieces/ArtPieces";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";

export default function Page({ data, isFavorite, onToggleFavorite }) {
  return <ArtPieces pieces={data} onToggleFavorite={onToggleFavorite} />;
}
