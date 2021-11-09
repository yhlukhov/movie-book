import styled from 'styled-components'
import mainBanner from '../../assets/img/main-banner.png'
import { colorPalette } from '../common/styled'
import { GoSearch } from 'react-icons/go'

export const HeaderDiv = styled.div`
  position: relative;
  width: 1200px;
  height: 396px;
  display: flex;
  flex-direction: column;
  background-image: url(${mainBanner});
  & .header-top {
    display: flex;
    justify-content: space-between;
    padding: 20px 60px;
    & .header-top-right {
      display: flex;
      align-items: center;
      & .login-url {
        font-size: 22px;
        font-weight: 500;
        padding: 5px;
        margin-right: 20px;
        cursor: pointer;
        color: ${colorPalette.red};
      }
    }
  }
`

export const MovieDescDiv = styled.div`
  width: 1200px;
  min-height: 396px;
  display: flex;
  flex-direction: column;
  background-image: url(${mainBanner});
  & .desc-top {
    display: flex;
    justify-content: space-between;
    padding: 20px 60px;
    & .desc-top-right {
      display: flex;
      align-items: center;
    }
  }
  & .movie-details {
    margin: 0 60px;
    display: flex;
    align-items: flex-start;
    color: #ffffff;
    & img {
      width: 200px;
    }
    & .info {
      width: 100%;
      margin-left: 30px;
      display: flex;
      flex-direction: column;
      & .title {
        display: flex;
        flex-direction: row;
        & h2 {
          font-size: 34px;
          font-weight: 300;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        & .rating {
          margin-top: -5px;
          margin-left: 15px;
          height: 40px;
          width: 40px;
          border: 1px solid white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      & .genre {
        margin-top: 5px;
        font-family: Montserrat;
        font-size: 16px;
        text-transform: capitalize;
      }
      & .date {
        display:  flex;
        color: ${colorPalette.red};
        font-size: 18px;
        margin-top: 20px;
        & div {
          margin-right: 25px;
        }
      }
      & .description {
        margin-top: 30px;
        max-height: 200px;
        overflow: scroll;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 5px;
        opacity: 0.5;
      }
    }
  }
`

export const AddBtn = styled.button`
  height: 46px;
  width: 177px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 600;
  color: ${colorPalette.red};
  background-color: #606060a0;
`

export const Title = styled.div`
  margin-top: 57px;
  font-size: 40px;
  font-weight: 200;
  letter-spacing: 1px;
  color: white;
  text-align: center;
  text-transform: uppercase;
  cursor: default;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

export const SearchInput = styled.input`
  height: 57px;
  width: 713px;
  margin: 3px 7px;
  padding-left: 20px;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 400;
  color: white;
  background-color: #323232cc;
`

export const SearchButton = styled.button`
  height: 58px;
  width: 233px;
  margin: 3px 7px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
  color: white;
  background: ${colorPalette.red};
`

export const SearchIco = styled(GoSearch)`
  color: ${colorPalette.red};
  font-size: 28px;
  cursor: pointer;
  padding: 0 10px;
  &:hover{
    transform: scale(1.1);
  }
`
