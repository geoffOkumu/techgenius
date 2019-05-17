import styled from 'styled-components'

const Input = styled.input`
  appearance: none;
  min-height: 36px;
  padding: 6px 10px;
  box-sizing: border-box;
  line-height: inherit;
  font-family: inherit;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.radius};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.textLight};
  transition: ${({ theme }) => theme.transition} box-shadow;

  ::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }

  ::-ms-clear {
    display: none;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue};
  }

  &[type='textarea'] {
    resize: vertical;
  }

  ${props => props.customStyles}
`

export default Input
