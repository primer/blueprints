import styled from 'styled-components'

const SearchResults = styled.div`
  box-shadow: 0 1px 5px rgba(27, 31, 35, 0.15);
  border: 1px solid #e1e4e8;
  min-width: 320px;
  border-radius: 3px;
  width: 100%;
  overflow: auto;
  right: 0;
  background-color: #fff;
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;

  @media (max-width: 1012px) {
    width: 100vw;
    height: auto;
    right: 0;
    left: 0;
  }
`

export default SearchResults
