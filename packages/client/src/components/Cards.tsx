import * as React from 'react'
import { FC, ReactNode } from 'react'
import Card from '../kit/Card'
import Link from '../kit/Link'
import { Theme } from '../kit/theme'
import { ViewType } from '../modules/library/reducers'
import use from '../utils/use'

interface CardProps {
  href: string
  width: number
  imgSrc: string
  title: ReactNode | (() => ReactNode)
  subtitle?: ReactNode | (() => ReactNode)
}

export const GridCard: FC<CardProps> = ({
  href,
  width,
  imgSrc,
  title,
  subtitle,
}) => (
  <Link to={href}>
    <Card width={width}>
      <div css={(theme: Theme) => ({ marginBottom: theme.space[2] })}>
        <Card.Image src={imgSrc} width={width} />
      </div>
      <Card.Title>{use(title)}</Card.Title>
      {subtitle && <Card.Subtitle>{use(subtitle)}</Card.Subtitle>}
    </Card>
  </Link>
)

export const ListCard: FC<CardProps> = ({
  href,
  width,
  imgSrc,
  title,
  subtitle,
}) => (
  <Link to={href}>
    <Card width={width}>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <div css={(theme: Theme) => ({ flex: 1, marginRight: theme.space[3] })}>
          <Card.Image src={imgSrc} />
        </div>
        <div css={{ flex: 2 }}>
          <Card.Title>{use(title)}</Card.Title>
          {subtitle && <Card.Subtitle>{use(subtitle)}</Card.Subtitle>}
        </div>
      </div>
    </Card>
  </Link>
)

export const SwitchCard: FC<CardProps & { viewType: ViewType }> = ({
  viewType,
  ...props
}) => {
  let CardType: FC<CardProps>
  switch (viewType) {
    case 'grid': {
      CardType = GridCard
      break
    }
    case 'list': {
      CardType = ListCard
      break
    }
    default:
      throw new Error('invalid viewType')
  }

  return CardType(props)
}
