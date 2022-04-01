import styled from "styled-components";

const ListItem = styled.li`
  color: lightgray;
  text-shadow: 1px 0.5px black;
  display: flex;
  text-align: center;
  align-content: center;
  align-items: center;
  text-shadow: 1px 1px 2px black;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  color: red;
  font-size: 15px;
  background-color: darkmagenta;
  height: 2em;
`;

function Footer() {
  return (
    <List>
      <ListItem>
        Criado por Andressa Quintanilha para fins educacionais
      </ListItem>
      <ListItem>@vainaweb</ListItem>
    </List>
  );
}

export default Footer;
