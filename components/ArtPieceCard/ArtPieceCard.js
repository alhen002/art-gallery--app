import styled from "styled-components";
import Image from "next/image";

const StyledCard = styled.article`
  padding: 5rem;
  border: 1px solid black;
  border-radius: 2rem;
  background: light-gray;
  margin: 5rem 0 5rem;
`;

// const StyledImage = styled(Image)``;

const StyledTitle = styled.h1``;

const StyledArtist = styled.h2``;

const StyledParagraph = styled.p``;

export default function ArtPieceCard({ artPiece }) {
  return (
    <StyledCard>
      <Image
        src={artPiece.imageSource}
        alt={artPiece.name}
        width={240}
        height={240}
      />
      <StyledTitle>{artPiece.name}</StyledTitle>
      <StyledArtist>{artPiece.artist}</StyledArtist>
      <StyledParagraph>
        {artPiece.year}, genre {artPiece.genre}
      </StyledParagraph>
    </StyledCard>
  );
}
