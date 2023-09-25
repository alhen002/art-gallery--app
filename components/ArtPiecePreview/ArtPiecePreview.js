import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  dimensions,
  slug,
  onToggleFavorite,
}) {
  return (
    <>
      <Link href={`/art-pieces/${slug}`}>
        <StyledArtContainer style={{ width: dimensions.width / 8 }}>
          <Image
            alt={`the painting ${title} by artist ${artist}`}
            src={image}
            style={{
              resizeMode: "center",
            }}
            width={dimensions.width / 10}
            height={dimensions.height / 10}
          />
          <StyledTitle>{title}</StyledTitle>
          <p>{artist}</p>
        </StyledArtContainer>
      </Link>
      <FavoriteButton onToggleFavorite={onToggleFavorite} slug={slug} />
    </>
  );
}

const StyledArtContainer = styled.div`
  padding: 1.5rem;
  background-color: lightblue;
  max-height: 28rem;
`;

const StyledTitle = styled.h2`
  font-size: 1rem;
  overflow-wrap: normal;
`;
