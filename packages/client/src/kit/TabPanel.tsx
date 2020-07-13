import * as React from 'react'
import { FC, useContext } from 'react'
import { TabsContext } from './Tabs'

export interface TabPanelProps {
  label: string
}

const TabPanel: FC<TabPanelProps> = ({ label, children }) => {
  const context = useContext(TabsContext)

  if (!context) return null
  const { activeTab } = context

  return activeTab === label ? <div>{children}</div> : null
}

export default TabPanel
