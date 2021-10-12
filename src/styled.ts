import styled, { createGlobalStyle } from 'styled-components'
import { colorPalette } from './components/common/styled'

export const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: 'Montserrat';
  background-color: ${colorPalette.grey};
  overflow: hidden;
`

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, input, textarea {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    box-sizing: border-box;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Remove scrollbar */
  ::-webkit-scrollbar{
    width: 0px;
    background: transparent;
  }

  /* Hide Arrows From Input Number */
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  } /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  /* input type date with calendar icon */
  input[type="date"]::-webkit-inner-spin-button {
    opacity: 0;
    z-index: 20;
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0;
    z-index: 20;
  }
  input[type="date"]::-webkit-calendar-picker-indicator:hover {
    cursor: pointer;
  }
`
