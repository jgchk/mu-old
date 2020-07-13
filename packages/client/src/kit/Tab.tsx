import * as React from 'react'
import { FC, useContext } from 'react'
import { TabsContext } from './Tabs'

export interface TabProps {
  label: string
}

const Tab: FC<TabProps> = ({ label, children }) => {
  const context = useContext(TabsContext)

  if (!context) return null
  const { setActiveTab } = context

  return (
    <div>
      <button onClick={() => setActiveTab(label)}>{children}</button>
    </div>
  )
}

export default Tab
