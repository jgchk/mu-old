import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import * as React from 'react'
import { FC } from 'react'
import { theme, Theme } from './theme'

export const ThemeWrapper: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global
      styles={{
        '*': { boxSizing: 'border-box' },
        html: { height: '100%' },
        body: { height: '100%', margin: 0 },
        '#app': { height: '100%' },
      }}
    />

    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto&display=swap');
      `}
    />

    <Global
      styles={(theme: Theme) => ({
        body: {
          fontFamily: theme.fonts.body,
          color: theme.colors.black,
        },
      })}
    />

    {children}
  </ThemeProvider>
)
