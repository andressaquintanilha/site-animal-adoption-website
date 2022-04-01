import styled from "styled-components";

const ListItem = styled.li`
  color: lightgray;
  text-shadow: 1px 0.5px black;
  display: flex;
  text-align: center;
  align-content: center;
  align-items: center;
  text-shadow: 2px 3px 2px black;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  color: red;
  font-size: 30px;
  background-color: darkmagenta;
  height: 2em;
`;

function Header() {
  return (
    <List>
      <ListItem>Home</ListItem>
      <ListItem>Sobre APA</ListItem>
      <ListItem>Lista Adoção</ListItem>
    </List>
  );
}

export default Header;
