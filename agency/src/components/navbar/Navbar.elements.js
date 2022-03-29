import styled from 'styled-components';
import { Container } from '../../GlobalStyles';
import {FaMagento} from 'react-icons/fa';
import {Link} from 'react-router-dom';


export const Nav = styled.nav`
  background-color: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  color: white;
`;


export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;



export const NavLogo = styled(Link)`
color: white;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
`;

export const NavIcon = styled(FaMagento)`
margin-right: 0.5rem;
`;


export const NavLink = styled.a`
font-size: 1.5rem;
color: #fff;
`;

export const SignButton = styled.button`
background-color: blue;
color: white;
border-radius: 3px;
height: 30px;
`