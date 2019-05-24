import React from "react";

import { Container, NewPlaylist } from "./styles";
import AddPlaylistIcon from "../../assets/images/add_playlist.svg";

const Sidebar = () => (
  <Container>
    <div />

    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Adicionar playlist" />
      Nova playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
