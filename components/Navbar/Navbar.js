import Link from "next/link";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  position: fixed;
  bottom: 1rem;
  border: 1px solid black;
  right: 0;
  left: 0;
  margin-inline: 4rem;
`;

const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 2rem;
  padding-inline: 2rem;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.75rem;
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledList>
        <li>
          <StyledLink href="/">Spotlight</StyledLink>
        </li>
        <li>
          <StyledLink href="/art-pieces/">Pieces</StyledLink>
        </li>
      </StyledList>
    </StyledNavbar>
  );
}
