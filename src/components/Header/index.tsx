import React from 'react';

import { Link, useRouteMatch } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

interface RouterParam {
  route: string;
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { params } = useRouteMatch<RouterParam>();

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          {
            <>
              <Link to='/' >  Listagem </Link>
              <Link to='/import' >  Importar </Link>
            </>
          }
        </nav>
      </header>
    </Container>
  );
}

export default Header;
