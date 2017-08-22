import { createElement } from 'react'
import { PropTypes } from 'prop-types'
import { find, get } from 'lodash'

// It just uses a specific component given a prop value.
// Less declaritive perhaps but really easy to reason about.
// You can use this concept anywhere!
function Router({ RouteIndex, defaultRouteId, ...props }) {
  // Find the default component to use if there is not route match.
  const ComponentDefault = get(RouteIndex, defaultRouteId, find(RouteIndex))
  // Get route id from props. Use defaultRouteId if route.id not found.
  const routeId = get(props, ['route', 'id'], defaultRouteId)
  // Select component from the RouteIndex. Use default Component if there is no match.
  const Component = get(RouteIndex, routeId, ComponentDefault)
  // Pass found component any props this component got.
  return createElement(Component, props)
}

Router.propTypes = {
  defaultRouteId: PropTypes.string.isRequired,
  route: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
  RouteIndex: PropTypes.objectOf(PropTypes.func).isRequired,
}
Router.defaultProps = {
  defaultRouteId: 'home',
}
export default Router
