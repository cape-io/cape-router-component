import { createElement } from 'react'
import ReactDOM from 'react-dom'
import { connect, Provider } from 'react-redux'
import routing from 'cape-routes'
import Router from './Router'

// Using a class for live/hot reload

// @param rootDestEl: Define our destination where we insert our root react component.
// window.document.getElementById('root')
// @param store: Redux store
// @param RouteIndex: Object of components keyed by routId.
export default function renderRoot({ rootEl, RouteIndex, store }) {
  ReactDOM.render(
    createElement(Provider, { store },
      createElement(connect(routing)(Router), { RouteIndex })
    ),
    rootEl
  )
}
