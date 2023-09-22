import Image from "next/image";
import styled from "styled-components";

export default function ArtPiecePreview({ artPiece }) {
  console.log(artPiece);
  return (
    <StyledArtContainer>
      <Image
        alt={`the painting ${artPiece.name} by artist ${artPiece.artist}`}
        src={artPiece.imageSource}
        width={200}
        height={300}
      />
      <StyledName>{artPiece.name}</StyledName>
      <p>{artPiece.artist}</p>
    </StyledArtContainer>
  );
}

const StyledArtContainer = styled.div`
  padding: 2rem;
  background-color: lightblue;
  width-max: 400px;
`;

const StyledName = styled.h2`
  font-size: 2rem;
`;
