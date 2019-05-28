import React from "react";
import { Container, Search, User } from "./styles";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img
        src="https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/57378663_2243525345730642_596862499794452480_n.jpg?_nc_cat=107&_nc_oc=AQkU4Ucp1ptpXNxcvS3GhIdIEOqb9nGjR5SpQLacH4oce7GeinhUvZXHhQmj1zDp5xBwZr3K1zKX2QiP74Y4Fhhd&_nc_ht=scontent-gru2-1.xx&oh=a33be952ce0f2da3916a43ad68914dd6&oe=5D63C881"
        alt="Avatar"
      />
      Joseph Oliveira
    </User>
  </Container>
);

export default Header;
