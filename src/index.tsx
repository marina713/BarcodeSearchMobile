import React from 'react';
import { AppContainer, Header, Heading, HeaderContainer } from "./styles";
import Home from "./screens/Home";

function Content() {
  return (
    <AppContainer>
      <Header>
        <HeaderContainer>
          <Heading>Search a Barcode</Heading>
        </HeaderContainer>
      </Header>
      <Home />
    </AppContainer>
  );
}

export default Content;
