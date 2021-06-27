import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: "/",
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: "Exchange",
        href: "http://exchange.bataviacrypto.com//#/swap",
      },
      {
        label: "Liquidity",
        href: "http://exchange.bataviacrypto.com//#/pool",
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Blocks Factory',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery'
  },
  {
    label: 'Buy Ondel',
    icon: 'IfoIcon',
    href: 'http://exchange.bataviacrypto.com//#/swap',
  },
  // {
  //   label: '+ BBKFI to Metamask',
  //   icon: 'LayerIcon',
  //   href: 'https://cutt.ly/addbbkfi',
  // },
  // {
  //   label: '+ wBBK to Metamask',
  //   icon: 'LayerIcon',
  //   href: 'https://cutt.ly/addwbbk',
  // },
  // {
  //   label: 'Roadmap',
  //   icon: 'RoadmapIcon',
  //   href: 'https://bitblocksproject.gitbook.io/bitblocks-finance/roadmap',
  // },
  // {
  //   label: 'Tools',
  //   icon: 'NftIcon',
  //   items: [
  //     {
  //       label: 'Lp Worth calculator',
  //       href: 'https://bitblocksfinance.web.app/calc.html',
  //     },
  //     {
  //       label: 'Farm stats',
  //       href: 'https://bitblocksfinance.web.app/farm.html',
  //     },

  //   ],
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Price Chart',
        href: '/'
      },
      {
        label: 'DappRadar (Stats)',
        href: '/'
      },
      {
        label: 'Docs',
        href: '/',
      },
      {
        label: 'Github',
        href: 'https://github.com/ondelondel',
      },
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/',
      },

    ],
  },
  // {
  //   label: 'Audit by TechRate',
  //   icon: 'AuditIcon',
  //   href: 'https://bitblocks.finance/files/Techrate-audit.pdf',
  // },
  {
    label: 'Ondel-Ondel Website',
    icon: 'MoreIcon',
    href: 'https://bataviacrypto.com/',
  },
]

export default config
