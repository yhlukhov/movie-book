import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { BiCheck } from 'react-icons/bi'
import { colorPalette } from '../../common/styled'
import { Form } from 'formik'

export const ModalContainerDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalDiv = styled.div`
  width: 976px;
  padding: 63px 57px 60px;
  position: relative;
  color: ${colorPalette.white};
  background: ${colorPalette.black};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1), 0px 2px 10px rgba(0, 0, 0, 0.07),
    0px 10px 20px rgba(0, 0, 0, 0.05), 0px 10px 50px rgba(0, 0, 0, 0.05);
  & h2 {
    font-size: 40px;
    font-weight: 300;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding-bottom: 35px;
  }
`

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  position: relative;
  & label {
    font-size: 16px;
    font-weight: 600;
    opacity: 0.8;
    color: ${colorPalette.red};
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  & input,
  textarea {
    height: 57px;
    border: none;
    border-radius: 4px;
    padding: 17px;
    font-size: 20px;
    color: white;
    background: #323232f2;
  }
  & textarea {
    height: 180px;
    resize: none;
  }
  & .options {
    position: absolute;
    top: 83px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    background-color: ${colorPalette.dark};
    border-radius: 3px;
    z-index: 50;
    & label {
      color: ${colorPalette.white};
    }
    & input {
      margin: 10px 10px 0 10px;
      height: auto;
    }
  }
  & .placeholder {
    color: grey;
  }
  & .down-arrow {
    position: absolute;
    top: 50px;
    right: 10px;
    border-color: ${colorPalette.red} transparent;
    border-style: solid;
    border-width: 15px 12px 0px 12px;
    height: 0px;
    width: 0px;
  }
  & .up-arrow {
    position: absolute;
    top: 46px;
    right: 10px;
    border-color: ${colorPalette.red} transparent;
    border-style: solid;
    border-width: 0 12px 15px 12px;
    height: 0px;
    width: 0px;
  }
  & .calendar-icon {
    color: ${colorPalette.red};
    font-size: 24px;
    position: absolute;
    top: 42px;
    right: 18px;
    z-index: 10;
  }
  & .error {
    color: ${colorPalette.red};
    font-size: 14px;
  }
`

export const StyledForm = styled(Form)`
  & .input-area {
    display: flex;
    justify-content: space-between;
    & .left-side {
      flex-grow: 4;
    }
    & .right-side {
      flex-grow: 1;
      margin-left: 15px;
    }
  }
  & .control-area {
    display: flex;
    justify-content: right;
    & button {
      height: 57px;
      width: 182px;
      margin-left: 20px;
      border-radius: 4px;
      border: 2px solid ${colorPalette.red};
      font-size: 20px;
      font-weight: 500;
      text-transform: uppercase;
      cursor: pointer;
    }
    & .reset {
      color: ${colorPalette.red};
      background-color: transparent;
    }
    & .submit {
      color: ${colorPalette.white};
      background-color: ${colorPalette.red};
    }
  }
`

export const ContextMenuDiv = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  width: 190px;
  text-align:right;
  border-radius: 4px;
  padding:5px;
  padding-top: 25px;
  background-color: ${colorPalette.black};
  & .btn {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 15px;
    cursor: pointer;
    &:hover {
      background-color: ${colorPalette.red};
    }
  }
`

export const DeleteDialog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & p {
    width: 100%;
    font-size: 20px;
    padding-bottom: 30px;
  }
  & button {
    height: 57px;
    width: 182px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${colorPalette.white};
    background-color: ${colorPalette.red};
  }
`

export const CongratDialog = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  & h2 {
    padding-top: 30px;
  }
  & p {
    font-family: Montserrat;
    font-size: 20px;
  }
  & svg {
    margin: 0 auto;
  }
`

export const CloseBtn = styled(MdClose)`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  color: white;
`
export const CloseBtnSm = styled(MdClose)`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  color: white;
`
export const CheckIcon = styled(BiCheck)`
  width: 66px;
  height: 66px;
  color: white;
  border-radius: 50%;
  background-color: ${colorPalette.red};
`
