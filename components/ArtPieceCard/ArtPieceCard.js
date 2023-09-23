import styled from "styled-components";
import Image from "next/image";

const StyledCard = styled.article`
  max-width: 50rem;
  max-height: 60rem;
  padding: 3rem;
  margin: 2rem 0 3rem 30vw;
  background-color: #ddc;
  border: solid 5vmin #eee;
  border-bottom-color: #fff;
  border-left-color: #eee;
  border-radius: 2px;
  border-right-color: #eee;
  border-top-color: #ddd;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25) inset,
    0 5px 10px 5px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  text-align: center;
  &:before {
    border-radius: 2px;
    bottom: -2vmin;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25) inset;
    content: "";
    left: -2vmin;
    position: absolute;
    right: -2vmin;
    top: -2vmin;
  }
  &:after {
    border-radius: 2px;
    bottom: -2.5vmin;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
    content: "";
    left: -2.5vmin;
    position: absolute;
    right: -2.5vmin;
    top: -2.5vmin;
  }
`;

const StyledImage = styled(Image)`
  border: solid 2px;
  border-bottom-color: #ffe;
  border-left-color: #eed;
  border-right-color: #eed;
  border-top-color: #ccb;
`;

const StyledTitle = styled.h1`
  padding-top: 2rem;
`;

const StyledArtist = styled.h2`
  font-weight: 500;
`;

const StyledParagraph = styled.p``;

export default function ArtPieceCard({ artPiece }) {
  return (
    <StyledCard>
      <StyledImage
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
