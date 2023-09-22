import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export function ArtPieces({ data }) {
  return (
    <ul>
      {data.map((artPiece) => {
        return (
          <li key={artPiece.slug}>
            {" "}
            <ArtPiecePreview artPiece={artPiece} />{" "}
          </li>
        );
      })}
    </ul>
  );
}
