import { useTransform } from 'framer-motion';
import React from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo, Burguer, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
  const { scrollyProgress } = useWrapperScroll()

  const opacity = useTransform(scrollyProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burguer />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">Contacts</a>
          </li>
          <li>
            <a href="#">Jamal developer</a>
          </li>
          <li>
            <a href="#">Tesla and Jamal</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
