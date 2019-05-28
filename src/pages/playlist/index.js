import React from "react";
import { Container, Header, SongList } from "./styles";
import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://www.billboard.com/files/styles/900_wide/public/media/Green-Day-American-Idiot-album-covers-billboard-1000x1000.jpg"
        alt="Cover"
      />

      <div>
        <span>PLAYLIST</span>
        <h1>Rock</h1>
        <p>13 Músicas</p>
        <button>PLAY</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td> American Idiot </td>
          <td> Green Day </td>
          <td> American Idiot </td>
          <td> 3:26 </td>
        </tr>

        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td> American Idiot </td>
          <td> Green Day </td>
          <td> American Idiot </td>
          <td> 3:26 </td>
        </tr>

        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td> American Idiot </td>
          <td> Green Day </td>
          <td> American Idiot </td>
          <td> 3:26 </td>
        </tr>

        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td> American Idiot </td>
          <td> Green Day </td>
          <td> American Idiot </td>
          <td> 3:26 </td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td> American Idiot </td>
          <td> Green Day </td>
          <td> American Idiot </td>
          <td> 3:26 </td>
        </tr>

        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td> American Idiot </td>
          <td> Green Day </td>
          <td> American Idiot </td>
          <td> 3:26 </td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
