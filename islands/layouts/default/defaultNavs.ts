export enum DEFAULT_PATHS {
  home = '/',
  blinks = '/blinks',
  doc = '/doc/general/getting-started',
  news = '/news',
  privacy = '/legal/privacy-policy',
}

export const defaultHeaderNav = [
  {
    path: DEFAULT_PATHS.blinks,
    label: 'common.nav.blinks',
  },
  {
    path: DEFAULT_PATHS.doc,
    label: 'common.nav.doc',
  },
  {
    path: DEFAULT_PATHS.news,
    label: 'common.nav.news',
  },
]

export const defaultFooterNav = [
  {
    path: DEFAULT_PATHS.blinks,
    label: 'common.nav.blinks',
  },
  {
    path: DEFAULT_PATHS.doc,
    label: 'common.nav.doc',
  },
  {
    path: DEFAULT_PATHS.news,
    label: 'common.nav.news',
  },
  {
    path: DEFAULT_PATHS.privacy,
    label: 'common.nav.privacy',
  },
]
