import React from "react";
import {
  SearchbarContainer,
  SearchBarInput,
  SearchbarWrapper,
} from "./SearchBarElements";

const SearchBar = ({ searchListener }) => {
  return (
    <SearchbarContainer>
      <SearchbarWrapper>
        <SearchBarInput
          onChange={searchListener}
          type="text"
          placeholder="search"
        />
      </SearchbarWrapper>
    </SearchbarContainer>
  );
};

export default SearchBar;
