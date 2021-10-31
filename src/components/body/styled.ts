import styled from 'styled-components'
import { colorPalette } from '../common/styled'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

export const BodyDiv = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: ${colorPalette.black};
`

export const MovieCountDiv = styled.div`
  width: 1060px;
  margin: 10px 0;
  & span {
    font-weight: 500;
  }
`

export const MovieListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const MovieCardDiv = styled.div`
  width: 320px;
  margin: 15px 25px;
  position: relative;
  & .picture {
    width: 100%;
    height: 480px;
    cursor: pointer;
    & img {
      width: 100%;
      height: 100%;
    }
  }
  & .info-wrapper {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
    font-size: 14px;
    font-weight: 500;
  }
  & .movie-title {
    font-size: 18px;
  }
  & .movie-genre {
    margin-top: 8px;
  }
  & .movie-year {
    height: 100%;
    padding: 5px;
    border: 1px solid #979797;
    border-radius: 5px;
  }
  & .rating {
    position: absolute;
    top: 440px;
    right: 10px;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid #979797;
    background-color: #42424280; 
  }
  & .menu {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 34px;
    height: 36px;
    display: flex;
    justify-content: center;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 2px;
    writing-mode: vertical-rl;
    border: 1px solid transparent;
    border-radius: 50%;
    background-color: #2a202d;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.196596);
    cursor: pointer;
    transition-duration: 0.2s;
    opacity: 0;
    &:hover {
      opacity: 0.9 !important;
    }
  }
  &:hover& .menu {
    opacity: 0.7;
  }
`

export const PaginatorDiv = styled.div`
  margin: 20px 10px;
  display: flex;
  color: ${colorPalette.red};
  font-size: x-large;
  & .pages {
    margin: 0 10px;
    display: flex;
    & li {
      padding: 0 5px;
      cursor: pointer;
    }
    & .active-page {
      color: white;
    }
  }
`

export const LeftArrow = styled(BsFillArrowLeftCircleFill)`
  cursor: pointer;
`
export const RightArrow = styled(BsFillArrowRightCircleFill)`
  cursor: pointer;
`