import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

export const WrapperGrid = styled.div`
  ${(props) =>
    props.full &&
    css`
      grid-column: 1 / 3;
    `}
`;

export const StyledButton = styled.button`
  background: #8b3030;
  border: 0;
  color: #fff;
  padding: 1em;
  text-transform: uppercase;
  width: 100%;

  &:hover,
  &:focus {
    background: #801414;
    color: #fff;
    outline: 0;
    transition: background-color 2s ease-out;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const Input = styled.input`
  padding: 1em;
  width: 100%;
  outline: none;
`;

export const Label = styled.label`
  display: block;
`;

export const Textarea = styled.textarea`
  padding: 1em;
  width: 100%;
  border: 2px solid black;
  outline: none;
`;

export const Title = ({ className, text }) => (
  <h1 className={className}>{text}</h1>
);

export const StyledTitle = styled(Title)`
  color: #b8161f;
  font: 70px;
  text-align: center;
  @media (min-width: 700px) {
    text-align: left;
  }
`;
