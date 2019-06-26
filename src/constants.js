import {compose, get as getKey} from 'styled-system'
import themeGet from '@styled-system/theme-get'
import {theme} from '@primer/components'

export const get = key => themeGet(key, getKey(theme, key))

export const CONTENT_MAX_WIDTH = 1012
