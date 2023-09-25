import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const artworks = [
  {
    slug: "orange-red-and-green",
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    year: "2018",
    genre: "Abstract Painting",
    colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
    dimensions: {
      height: 2432,
      width: 1920,
      type: "jpg",
    },
  },
  {
    slug: "blue-and-red",
    artist: "Jung-Hua Lui",
    name: "Blue and Red",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    year: "2018",
    genre: "Abstract Painting",
    colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
    dimensions: {
      height: 2432,
      width: 1920,
      type: "jpg",
    },
  },
];

const ButtonBack = styled(Button)`
  padding-top: 2rem;
`;

export default function ArtPiece() {
  const router = useRouter();
  const { slug } = router.query;

  const artwork = artworks.find((artwork) => artwork.slug === slug);

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
