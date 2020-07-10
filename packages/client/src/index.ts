import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'

const container = document.createElement('div')
container.id = 'app'
document.body.append(container)

ReactDOM.render(React.createElement(App), container)
