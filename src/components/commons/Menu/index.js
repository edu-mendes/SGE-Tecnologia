/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import Link from '../Link';
import { MenuWrapper } from './styles/MenuWrapper';

export default function Menu() {
  const [isMenuOpen, setMenuState] = React.useState(false);
  return (
    <MenuWrapper isMenuOpen={isMenuOpen}>
      <div className="container">
        <MenuWrapper.Logo>
          <span>SGE Tecnologia</span>
        </MenuWrapper.Logo>
        <nav style={{ flex: 1 }}>
          {[{ name: 'Inicio', slug: '/' }, { name: 'Listas de Gatos', slug: '/listagatos' }, { name: 'Formulário', slug: '/formulario' }].map((menuItem) => (
            <Link key={`key__${menuItem.name.toLocaleLowerCase()}`} href={`${menuItem.slug.toLocaleLowerCase()}`}>
              {menuItem.name}
            </Link>
          ))}
        </nav>
        <button onClick={() => setMenuState(!isMenuOpen)}>
          {isMenuOpen && <img src="/image/menu-open.svg" alt="Icon menu open" />}
          {!isMenuOpen && <img src="/image/menu-closed.svg" alt="Icon menu close" />}
        </button>
      </div>
      <MenuMobile />
    </MenuWrapper>
  );
}

function MenuMobile() {
  return (
    <div className="MenuMobile">
      <div>
        <hr />
        <MenuMobileDefault />
      </div>
    </div>
  );
}

export function MenuMobileDefault() {
  return (
    <MenuMobileDefault.MenuWrapper>
      <nav>
        <a href="/">
          Inicio
        </a>
        <a href="/listagatos">
          Listas de Gatos
        </a>
        <a href="/formulario">
          Formulário
        </a>
        <hr />
      </nav>
    </MenuMobileDefault.MenuWrapper>
  );
}
MenuMobileDefault.MenuWrapper = styled.div`
    a {
      font-size: 12px;
      color: #2E7BB4;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      text-decoration: none;
      img {
        width: 16px;
        height: 16px;
        margin-right: 5px; 
      }
    }
  `;
