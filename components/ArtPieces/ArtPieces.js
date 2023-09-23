import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import styled from "styled-components";

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
            />
          </li>
        );
      })}
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
