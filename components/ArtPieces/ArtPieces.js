import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export function ArtPieces({ pieces }) {
  return (
    <StyledList>
      {pieces.map((artPiece) => {
        return (
          <li key={artPiece.slug}>
            <ArtPiecePreview
              image={artPiece.imageSource}
              title={artPiece.name}
              artist={artPiece.artist}
              dimensions={artPiece.dimensions}
              slug={artPiece.slug}
            />
          </li>
        );
      })}
    </StyledList>
  );
}
