import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import styled from "styled-components";

export function ArtPieces({ data }) {
  return (
    <StyledUl>
      {data.map((artPiece) => {
        return (
          <li key={artPiece.slug}>
            {" "}
            <ArtPiecePreview artPiece={artPiece} />{" "}
          </li>
        );
      })}
    </StyledUl>
  );
}

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
