import { FiCreditCard,  } from 'react-icons/fi';
import { BsCurrencyDollar, BsShield } from 'react-icons/bs';
import {AiFillHome} from 'react-icons/ai'
import {FaNewspaper} from 'react-icons/fa'
import {BiSolidShoppingBagAlt} from 'react-icons/bi'
import {MdLiveTv} from 'react-icons/md'

import valoIcon from './icons8-valorant-50-2.png';
import csIcon from './icons8-counter-strike-logo-50.png'
import lolIcon from './icons8-league-of-legends-30.png'
import codIcon from './icons8-call-of-duty-modern-warfare-50.png'
import fifaIcon from './icons8-fifa-21-48.png'
import dotaIcon from './icons8-dota-2-30.png'

export const shop =[
  {
    title:'Apex',
    tokenname: 'Apex Coin',
    icon:'',
    price:'2500$',
  },
  {
    title:'Fornite',
    tokenname: 'V-bucks',
    icon:'',
    price:'2500$',
  },
  {
    title:'Rainbow Six Seige',
    tokenname: 'R6 credits',
    icon:'',
    price:'2500$',
  },
  {
    title:'Valorant',
    tokenname: 'Valo coin',
    icon:'',
    price:'2500$',
  },
]


export const gamedata=[
  {
    name:'Ranking'
  },
  {
    name:'Latest News'
  },
  {
    name:'Tournaments'
  },
  {
    name:'Shop'
  }
]







export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Home',
        icon: <AiFillHome className='w-6 h-6'/>,
      },
    ],
  },

  {
    title: 'Games',
    links: [
      {
        name: 'Valorant',
        icon: <img src={valoIcon} alt='valo' className='invert w-6'/>,
      },
      {
        name: 'LoL',
        icon: <img src={lolIcon} alt='lol' className='invert w-6'/>,
      },
      {
        name: 'CALLOFDUTY',
        icon: <img src={codIcon} alt='cod' className='invert w-6' />,
      },
      {
        name: 'FiFa',
        icon: <img src={fifaIcon} alt='fifa' className='invert w-8 '/>,
      },
      {
        name: 'CS:GO',
        icon: <img src={csIcon} alt='cs' className='invert w-7'/>,
      },
      {
        name: 'Dota 2',
        icon: <img src={dotaIcon} alt='dota2' className='invert w-7'/>,
      },
    ],
  },

  {
    title: 'Apps',
    links: [
      {
        name: 'Latest news',
        icon: <FaNewspaper className='text-2xl' />,
      },
      {
        name: 'Shop',
        icon: <BiSolidShoppingBagAlt className='text-2xl' />,
      },
      {
        name: 'Live Steaming',
        icon: <MdLiveTv className='text-2xl' />,
      },
    ],
  },
 
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];