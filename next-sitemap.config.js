// const SITE_URL = process.env.SITE_URL || 'https://customersuccess.guide'
const SITE_URL = 'https://customersuccess.guide'

const NEXT_SSG_FILES = [
  '/*.json$',
  '/*_buildManifest.js$',
  '/*_middlewareManifest.js$',
  '/*_ssgManifest.js$',
  '/*.js$',
]

/** @type {import('next-sitemap').IConfig} */
const config = {
  SITE_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: NEXT_SSG_FILES,
      },
    ],
  },
}

module.exports = config
