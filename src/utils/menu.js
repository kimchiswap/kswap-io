const menu = [
  {
    name: 'Products',
    sublinks: [
      {
        name: 'App',
        link: 'https://app.kimchiswap.io/#/',
        description: 'Swap tokens and supply liquidity'
      },
      {
        name: 'Analytics',
        link: 'https://info.kimchiswap.io/',
        description: 'KSWAP analytics and historical data'
      },
      {
        name: 'Token Lists',
        link: 'https://tokens.kimchiswap.io/',
        description: 'KSWAP Ethereum token list standard.'
      },
      {
        name: 'KIMCHI',
        link: 'https://kimchiwap.io/',
        description: 'Something Interesting Coming Soon'
      },
    ]
  },
  {
    name: 'Developers',
    sublinks: [
      {
        name: 'Documentation',
        link: '/docs/v1' //This was v2
      },
      { name: 'GitHub', link: 'https://github.com/kimchiswap' },
      { name: 'Whitepaper', link: '/whitepaper.pdf' },
      { name: 'Bug Bounty', link: '/bug-bounty' }
    ]
  },
  {
    name: 'Community',
    sublinks: [
      { name: 'Telegram', link: 'https://t.me/kswap' },
      { name: 'Twitter', link: 'https://twitter.com/kswapdex' },
      { name: 'Reddit', link: 'https://reddit.com/r/kswap' },
      { name: 'Github', link: 'https://gitub.com/kswap' },
      { name: 'Medium', link: 'https://www.medium.com/@kswap' }
    ]
  },
  {
    name: 'About',
    sublinks: [
      {
        name: 'Blog',
        link: '/blog'
      },
      {
        name: 'Info',
        link: '/about'
      },
      {
        name: 'FAQ',
        link: 'docs/v1/faq'
      },
      {
        name: 'Jobs',
        link: '/about#jobs'
      },
    ]
  }
]

module.exports = menu
