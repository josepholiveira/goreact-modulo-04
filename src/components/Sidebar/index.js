import React from "react";

import { Container, NewPlaylist, Nav } from "./styles";
import AddPlaylistIcon from "../../assets/images/add_playlist.svg";

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="">Navegar</a>
        </li>
        <li>
          <a href="">Rádio</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>SUA BIBLIOTECA</span>
        </li>
        <li>
          <a href="">Seu Daily Mix</a>
        </li>
        <li>
          <a href="">Tocados Recentemente</a>
        </li>
        <li>
          <a href="">Músicas</a>
        </li>
        <li>
          <a href="">Álbums</a>
        </li>
        <li>
          <a href="">Artistas</a>
        </li>
        <li>
          <a href="">Estações</a>
        </li>
        <li>
          <a href="">Arquivos locais</a>
        </li>
        <li>
          <a href="">Podcast</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span> Playlists </span>
        </li>
        <li>
          <a href="">Chilling</a>
        </li>
      </Nav>
    </div>

    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Adicionar playlist" />
      Nova playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
