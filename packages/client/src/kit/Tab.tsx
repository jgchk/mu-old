import * as React from 'react'
import { FC } from 'react'
import { Theme } from './theme'
import useTabs from './useTabs'

export interface TabProps {
  label: string
}

const Tab: FC<TabProps> = ({ label, children }) => {
  const { setActiveTab } = useTabs()

  return (
    <button
      onClick={() => setActiveTab(label)}
      css={(theme: Theme) => ({
        padding: `${theme.space[1]}px ${theme.space[2]}px`,
        fontFamily: theme.fonts.body,
        fontSize: theme.fontSizes[2],
        color: theme.colors.gray[9],
        '&:hover': { color: theme.colors.gray[8] },
        cursor: 'pointer',
        background: 'none',
        border: 'none',
      })}
    >
      {children}
    </button>
  )
}

export default Tab
