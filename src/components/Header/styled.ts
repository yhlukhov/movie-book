import styled from 'styled-components'
import mainBanner from '../../assets/img/main-banner.png'
import { colorPalette } from '../common/styled'

export const HeaderDiv = styled.div`
  position: relative;
  width: 1200px;
  height: 396px;
  display: flex;
  flex-direction: column;
  background-image: url(${mainBanner});
  & .top {
    display: flex;
    justify-content: space-between;
    padding: 20px 60px;
    & .top-right {
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
