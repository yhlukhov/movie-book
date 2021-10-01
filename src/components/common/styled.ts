import styled from 'styled-components'

export enum colorPalette {
  red='#F65261',
  white='#FFFFFF',
  black='#232323',
  dark='#424242',
  grey='#555555'
}

export const LogoDiv = styled.div`
  color: ${colorPalette.red};
  cursor: default;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  & span {
    font-weight: 900;
  }
`