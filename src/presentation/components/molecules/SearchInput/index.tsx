import React, { useEffect, useState } from "react";
import { Container, Input } from "./style";
import useDebounce from "presentation/hooks/useDebounce";

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}
const SearchInput: React.FC<SearchInputProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchTerm = useDebounce(searchValue, 400);

  useEffect(()=> {
    setSearchValue(searchTerm)
  }, [searchTerm])

  useEffect(()=>{
    setSearchTerm(debouncedSearchTerm)
  },[debouncedSearchTerm, setSearchTerm])

  return (
    <Container>
      <Input
        type="search"
        name="search-form"
        className="search-input"
        placeholder="Search for..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </Container>
  );
};

export default SearchInput;
