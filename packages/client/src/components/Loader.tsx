import { FC } from 'react'
import * as React from 'react'
import { Loader as LoaderIcon } from 'react-feather'
import styled, { keyframes } from 'styled-components'

const spinKeyframes = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`

const Spinner = styled.div`
  animation: ${spinKeyframes} 2s infinite;
`

const Loader: FC = () => (
  <Spinner>
    <LoaderIcon />
  </Spinner>
)

export default Loader
