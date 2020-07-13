import * as React from 'react'
import { FC } from 'react'
import useTabs from './useTabs'

export interface TabProps {
  label: string
}

const Tab: FC<TabProps> = ({ label, children }) => {
  const { setActiveTab } = useTabs()

  return (
    <div>
      <button onClick={() => setActiveTab(label)}>{children}</button>
    </div>
  )
}

export default Tab
