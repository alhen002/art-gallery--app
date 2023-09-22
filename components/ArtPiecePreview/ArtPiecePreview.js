import Image from "next/image";
export default function ArtPiecePreview({ artPiece }) {
  console.log(artPiece);
  return (
    <>
      <Image
        alt={`the painting ${artPiece.name} by artist ${artPiece.artist}`}
        src={artPiece.imageSource}
        width={200}
        height={300}
      />
      <h1>{artPiece.name}</h1>
      <p>{artPiece.artist}</p>
    </>
  );
}
