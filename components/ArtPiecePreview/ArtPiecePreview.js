import Image from "next/image";
import styled from "styled-components";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <StyledArtContainer>
      <Image
        alt={`the painting ${title} by artist ${artist}`}
        src={image}
        width={200}
        height={300}
      />
      <StyledName>{title}</StyledName>
      <p>{artist}</p>
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
