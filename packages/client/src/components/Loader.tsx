import { keyframes } from '@emotion/core'
import { FC } from 'react'
import * as React from 'react'
import { FiLoader as LoaderIcon } from 'react-icons/fi'

const spinKeyframes = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`

const Loader: FC = () => (
  <div css={{ animation: `${spinKeyframes} 2s infinite` }}>
    <LoaderIcon />
  </div>
)

export default Loader
