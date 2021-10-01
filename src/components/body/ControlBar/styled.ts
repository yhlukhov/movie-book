import styled from 'styled-components'
import selectIco from '../../../assets/selectIco.svg'
import { colorPalette } from '../../common/styled'

export const ControlDiv = styled.div`
  width: 1060px;
  margin: 20px 0 40px;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
`

export const GenreSelectDiv = styled.div`
  font-size: 16px;
  font-weight: 500;
`

export const GenreItemLabel = styled.label`
  margin: 0 10px;
  padding: 10px 5px 10px 4px;
  transition: border-bottom 0.2s ease-in;
  & input {
    display: none;
  }
  &.active {
    border-bottom: 3px solid ${colorPalette.red};
  }
  &:hover {
    cursor: pointer;
  }
`

export const SortByLabel = styled.label`
  & span {
    padding-right: 15px;
    font-size: 16px;
    letter-spacing: 0.9px;
    opacity: 0.6;
  }
  & select {
    appearance: none;
    padding: 10px 25px 10px 10px;
    color: white;
    background-color: transparent;
    background-image: url(${selectIco});
    background-size: 8%;
    background-position: right;
    background-repeat: no-repeat;
    border: none;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.9;
    &:focus {
      background-color: ${colorPalette.grey};
    }
  }
`
