  
import React from 'react'
import ReactDOM from 'react-dom'
import Memory from './Memory'
import Hanged from './Hanged'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Memory />, document.getElementById('root'))
ReactDOM.render(<Hanged />, document.getElementById('rima'))

registerServiceWorker()