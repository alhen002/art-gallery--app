import styled from "styled-components";
import css from "styled-jsx/css";
import Image from "next/image";
import HeartImage from "@/assets/heart.svg";

const StyledButton = styled.button`
  width: 2rem;
  aspect-ratio: 1;
  background-color: transparent;
  border-radius: 50%;
`;
//   ${({ $isfavorite }) =>
//     $isfavorite &&
//     css`
//       color: red;
//     `}

export default function FavoriteButton(isFavorite, onToggleFavorite, slug) {
  return (
    <button onClick={onToggleFavorite}>
      {/* {isFavorite ? <HeartImage color="red" /> : <HeartImage />} */}
    </button>
  );
}
