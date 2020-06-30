import * as React from 'react'
import { FC } from 'react'
import { Image } from 'react-feather'

const CoverArt: FC<{ src?: string }> = ({ src }) =>
  src === undefined ? (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100px',
        height: '100px',
      }}
    >
      <Image />
    </div>
  ) : (
    <img src={src} width={100} height={100} />
  )

export default CoverArt
