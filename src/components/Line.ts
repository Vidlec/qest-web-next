import styled from 'styled-components'

const Line = styled.div`
  width: 100%;
  position: absolute;
  height: 0.15rem;
  left: 0;
  background-color: ${({ theme }) => theme.colors.mainFont};
  box-shadow: 0px 0px 12px ${({ theme }) => theme.colors.mainFont};
`

export default Line
