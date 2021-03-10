import styled from "styled-components";

export const SearchbarContainer = styled.div`
  background: #fff;
`;

export const SearchbarWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  justify-content: center;
  align-items: center;
`;

export const SearchBarInput = styled.input`
  padding: 1em 0.5em;
  background: #f3f3f3;
  color: #000;
  border-radius: 8px;
  width: 300px;
  margin-top: 30px;
  font-size: 14px;
  ::placeholder {
    color: #000;
    font-size: 14px;
  }
`;
