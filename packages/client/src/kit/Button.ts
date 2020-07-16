import styled from '@emotion/styled'
import { Theme } from './theme'

interface ButtonProps {
  fontSize?: number
  shade?: number
  theme: Theme
}

const Button = styled.button([
  {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  ({ fontSize = 4, theme }: ButtonProps) => ({
    fontSize: theme.fontSizes[fontSize],
  }),
  ({ theme, shade = 9 }: ButtonProps) => ({
    color: theme.colors.gray[shade],
    '&:hover': { color: theme.colors.gray[shade - 1] },
  }),
])

export default Button
