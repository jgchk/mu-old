import palx, { PalxPalette } from 'palx'

export interface Theme {
  space: [number, number, number, number, number, number]
  fontSizes: [number, number, number, number, number, number]
  fontWeights: [number, number, number, number]
  colors: PalxPalette
  fonts: {
    display: string
    body: string
  }
  borderWidths: [number, number, number, number, number]
}

export const theme: Theme = {
  space: [2, 4, 8, 16, 32, 64],
  fontSizes: [12, 14, 16, 20, 24, 32],
  fontWeights: [300, 400, 500, 600],
  colors: palx('#06BCC1'),
  fonts: {
    display: "'Montserrat', sans-serif",
    body: "'Roboto', sans-serif",
  },
  borderWidths: [1, 2, 4, 8, 16],
}
