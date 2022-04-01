import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Story1 = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: justify;
  text-align: justify;
  padding: 1em;
`;

const Story2 = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: justify;
  text-align: justify;
  padding: 1em;
`;

const List = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: justify;
  text-align: center;
  font-weight: bold;
`;

const Button = styled.button`
  border: none;
  padding: 0.2em;
  margin: 0.4em 0;
  background: lightpink;
  font-weight: bold;
  font-size: 25px;
`;

const BoxButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 2em;
`;

export default class AnimalAdoption extends Component {
  state = {
    dogs: [
      { name: "Tulio", breed: "Chiwawa", age: "5" },
      { name: "Pipoca", breed: "SRD", age: "9" },
      { name: "Spike", breed: "Pastor", age: "2" }
    ],
    cats: [
      { name: "Oliver", breed: "Angorá", age: "10" },
      { name: "Lola", breed: "Persa", age: "12" },
      { name: "Garfield", breed: "SRD", age: "7" }
    ],
    list: []
  };

  dogs = () => {
    this.setState({
      list: this.state.dogs.map((item) => (
        <div>
          <p>
            Dados: atende por {item.name}, tem {item.age} anos e é da raça{" "}
            {item.breed}.
          </p>
        </div>
      ))
    });
  };

  cats = () => {
    this.setState({
      list: this.state.cats.map((item) => (
        <div>
          <p>
            Dados: atende por {item.name}, tem {item.age} anos e é da raça{" "}
            {item.breed}.
          </p>
        </div>
      ))
    });
  };

  render() {
    return (
      <div>
        <Title>APA - ASSOCIAÇÃO DE PROTEÇÃO AOS ANIMAIS DE BOTUCATU</Title>
        <Story1>
          Somos uma organização não governamental composta por voluntários que
          trabalham sem qualquer remuneração. Nosso único lucro é o bem estar
          dos animais. Atuamos na conscientização e educação para a posse
          responsável, castração, recolocação de animais em lares e
          encaminhamento de casos de maus tratos e abandono às autoridades
          competentes.{" "}
        </Story1>
        <Story2>
          Todo sábado realizamos a Feirinha de Doação na Praça Emilio Peduti
          (Bosque), no Centro, das 10 às 12h, onde também agendamos castrações.
          As doações recebidas em ração, dinheiro e etc. são destinadas a
          famílias carentes, animais abrigados em lares temporários ou em
          clínicas veterinárias parceiras. A APA não tem abrigo. Nossos recursos
          são poucos, então pedimos compreensão, e se você puder nos ajudar,
          ficaremos muito felizes.
        </Story2>
        <List>
          Acesse abaixo nossa lista dos animais que estão para adoção.
        </List>

        <BoxButtons>
          <Button onClick={this.dogs}>DOGS</Button>
          <Button onClick={this.cats}>CATS</Button>
          <h2>{this.state.list}</h2>
        </BoxButtons>
      </div>
    );
  }
}
