import * as React from 'react'
import { FC } from 'react'
import { Theme } from './theme'

export interface CardImageProps {
  src: string
  width?: number
}

const CardImage: FC<CardImageProps> = ({ src, width }) => (
  <img
    src={src}
    width={width}
    css={(theme: Theme) => ({
      maxWidth: '100%',
      display: 'block',
      borderRadius: theme.borderWidths[2],
    })}
  />
)

export default CardImage
