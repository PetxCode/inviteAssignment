import React from "react";
import styled from "styled-components";

interface iData {
  image: string;
  name: string;
}

const NavComp: React.FC<iData> = ({ image, name }) => {
  return (
    <Container>
      <Wrapper>
        <Button>But 1</Button>
        {name !== "" && image !== "" ? (
          <Button>But 2</Button>
        ) : (
          <Button disabled>But 2</Button>
        )}
        <Button>But 3</Button>
      </Wrapper>
    </Container>
  );
};

export default NavComp;

const Button = styled.button`
  /* background-color: ; */
  color: white;
  padding: 15px 20px;
  border-radius: 5px;
  margin: 15px 0;
  transition: all 360ms;
  margin: 10px;

  :hover {
    transform: scale(0.98);
    cursor: pointer;
  }
`;
const Wrapper = styled.div`
  display: flex;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
