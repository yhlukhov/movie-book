import styled from 'styled-components'
import mainBanner from '../../assets/img/main_banner.png'

export const HeaderDiv = styled.div`
  position: relative;
  width: 1200px;
  height: 396px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${mainBanner});
`

export const LogoDiv = styled.div`
  position: absolute;
  top: 20px;
  left: 60px;
  color: #f65261;
  cursor: default;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  & span {
    font-weight: 900;
  }
`

export const AddBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 60px;
  height: 46px;
  width: 177px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: Montserrat;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 600;
  color: #f65261;
  background-color: #606060a0;
`

export const Title = styled.div`
  position: absolute;
  top: 115px;
  left: 110px;
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 200;
  letter-spacing: 1px;
  color: white;
  text-transform: uppercase;
  cursor: default;
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-top: 30px;
`

export const SearchInput = styled.input`
  height: 57px;
  width: 713px;
  margin: 3px 7px;
  padding-left: 20px;
  border: none;
  border-radius: 4px;
  font-family: Montserrat;
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
  background: #f65261;
`
