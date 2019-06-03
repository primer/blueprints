import Router from 'next/router'
import withGA from 'next-ga'

const {id: GOOGLE_ANALYTICS_UA} = process.env

export default function withAnalytics(Component) {
  return id ? withGA(id, Router)(Component) : Component
}
