import {
  StyledArtist,
  StyledImage,
  StyledCard,
  StyledTitle,
} from "../ArtPieceDetails/ArtPieceDetails";

export default function Spotlight({ image, artist, title, dimensions }) {
  return (
    <StyledCard>
      <StyledTitle> {title} </StyledTitle>
      <StyledArtist>{artist}</StyledArtist>
      <StyledImage
        src={image}
        alt={title}
        width={dimensions.width / 5}
        height={dimensions.height / 5}
      />
    </StyledCard>
  );
}
