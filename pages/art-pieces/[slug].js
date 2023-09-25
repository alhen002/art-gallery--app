import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const ButtonBack = styled(Button)`
  padding-top: 2rem;
`;

export default function ArtPiece({ data }) {
  const router = useRouter();
  const { slug } = router.query;
  const artwork = data.find((artwork) => artwork.slug === slug);

  if (!artwork) {
    return null;
  }

  const {
    artist,
    imageSource: image,
    name: title,
    genre,
    dimensions,
    year,
  } = artwork;

  return (
    <>
      <ButtonBack name={"Back"}></ButtonBack>
      <ArtPieceDetails
        image={image}
        artist={artist}
        title={title}
        genre={genre}
        dimensions={dimensions}
        year={year}
      />
    </>
  );
}
