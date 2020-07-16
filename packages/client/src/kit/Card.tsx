import * as React from 'react'
import { FC } from 'react'
import CardSubtitle from './CardSubtitle'
import CardTitle from './CardTitle'
import { Theme } from './theme'

interface CardComposition {
  Title: FC
  Subtitle: FC
}

const Card: FC<{ width?: number }> & CardComposition = ({
  children,
  width,
}) => (
  <div
    css={(theme: Theme) => ({
      width,
      background: theme.colors.gray[0],
      border: `${theme.borderWidths[4]}px solid ${theme.colors.gray[0]}`,
      borderRadius: theme.borderWidths[3],
      margin: theme.space[2],
      boxSizing: 'content-box',
      transition: 'boxShadow 1s',
      '&:hover': {
        background: theme.colors.gray[1],
        borderColor: theme.colors.gray[1],
      },
    })}
  >
    {children}
  </div>
)

Card.Title = CardTitle
Card.Subtitle = CardSubtitle

export default Card
