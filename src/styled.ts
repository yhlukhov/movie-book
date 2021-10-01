import styled from 'styled-components';
import { colorPalette } from './components/common/styled';

export const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: 'Montserrat';
  background-color: ${colorPalette.grey};
  overflow: hidden;
  
`
