import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import './styles/bootstrap.scss'

const container = document.createElement('div')
document.body.append(container)

ReactDOM.render(React.createElement(App), container)
