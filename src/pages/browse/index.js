import React from "react";

import { Container, Title, List, PlayList } from "./styles";

const Browse = () => (
  <Container>
    <Title>Navegar </Title>

    <List>
      <PlayList to="/playlists/1">
        <img
          src="https://www.billboard.com/files/styles/900_wide/public/media/Green-Day-American-Idiot-album-covers-billboard-1000x1000.jpg"
          alt="Cover"
        />
        <strong>Rock</strong>
        <p>
          Relaxe enquanto você programa ouvindo as melhores do rock mundial!
        </p>
      </PlayList>
      <PlayList to="/playlists/1">
        <img
          src="https://www.billboard.com/files/styles/900_wide/public/media/Green-Day-American-Idiot-album-covers-billboard-1000x1000.jpg"
          alt="Cover"
        />
        <strong>Rock</strong>
        <p>
          Relaxe enquanto você programa ouvindo as melhores do rock mundial!
        </p>
      </PlayList>
      <PlayList to="/playlists/1">
        <img
          src="https://www.billboard.com/files/styles/900_wide/public/media/Green-Day-American-Idiot-album-covers-billboard-1000x1000.jpg"
          alt="Cover"
        />
        <strong>Rock</strong>
        <p>
          Relaxe enquanto você programa ouvindo as melhores do rock mundial!
        </p>
      </PlayList>
    </List>
  </Container>
);

export default Browse;
