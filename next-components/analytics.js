import Router from 'next/router'
import withGA from 'next-ga'

const {GOOGLE_ANALYTICS_UA: id} = process.env

export default function withAnalytics(Component) {
  return id ? withGA(id, Router)(Component) : Component
}
