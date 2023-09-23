import styled from "styled-components";
import Image from "next/image";

const StyledCard = styled.article`
  width: 50rem;
  padding: 3rem;
  border: 2px solid #91959c;
  border-radius: 2rem;
  background: #ebeff5;
  margin: 5rem;
  display: grid;
  place-items: center;
`;

// const StyledImage = styled(Image)``;

const StyledTitle = styled.h1`
  padding-top: 2rem;
`;

const StyledArtist = styled.h2``;

const StyledParagraph = styled.p``;

export default function ArtPieceCard({ artPiece }) {
  return (
    <StyledCard>
      <Image
        src={artPiece.imageSource}
        alt={artPiece.name}
        width={artPiece.dimensions.width / 5}
        height={artPiece.dimensions.height / 5}
      />
      <StyledTitle>{artPiece.name}</StyledTitle>
      <StyledArtist>{artPiece.artist}</StyledArtist>
      <StyledParagraph>
        {artPiece.year}, genre {artPiece.genre}
      </StyledParagraph>
    </StyledCard>
  );
}
