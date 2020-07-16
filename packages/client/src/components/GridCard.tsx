import * as React from 'react'
import { FC, ReactNode } from 'react'
import Card from '../kit/Card'
import Link from '../kit/Link'
import use from '../utils/use'

const GridCard: FC<{
  href: string
  width: number
  imgSrc: string
  title: ReactNode | (() => ReactNode)
  subtitle: ReactNode | (() => ReactNode)
}> = ({ href, width, imgSrc, title, subtitle }) => (
  <Link to={href}>
    <Card width={width}>
      <img src={imgSrc} width={width} />
      <Card.Title>{use(title)}</Card.Title>
      <Card.Subtitle>{use(subtitle)}</Card.Subtitle>
    </Card>
  </Link>
)

export default GridCard
