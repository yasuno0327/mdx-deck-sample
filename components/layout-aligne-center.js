import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
`

const LayoutAlignCenter = ({ children }) => <Wrapper>{children}</Wrapper>

export default LayoutAlignCenter