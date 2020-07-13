import * as React from 'react'
import { FC } from 'react'
import useTabs from './useTabs'

export interface TabPanelProps {
  label: string
}

const TabPanel: FC<TabPanelProps> = ({ label, children }) => {
  const { activeTab } = useTabs()
  return activeTab === label ? <div>{children}</div> : null
}

export default TabPanel
