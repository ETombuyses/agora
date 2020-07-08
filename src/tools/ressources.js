// icons
import gas from '../assets/icons/tasks/gas.png'
import water from '../assets/icons/tasks/water.png'
import lightning from '../assets/icons/tasks/lightning.png'
import trash from '../assets/icons/tasks/trash.png'
import bus from '../assets/icons/tasks/bus.png'

export const resources = {
  Eau: { name: 'water' },
  Electricité: { name: 'electricity' },
  Gaz: { name: 'gas' },
  Déchets: { name: 'waste' },
  Transports: { name: 'transport' },
}

export const tasks = {
  Eau: { icon: 'water', unit: 'L', trad: 'Eau', name: 'water' },
  Electricité: {
    icon: 'lightning',
    unit: 'kW/h',
    trad: 'Electricité',
    name: 'electricity',
  },
  Gaz: { icon: 'fire', unit: 'KW/h', trad: 'Gaz', name: 'gas' },
  Déchets: { icon: 'trash', unit: 'Kg', trad: 'Déchets', name: 'waste' },
  Transports: { icon: 'bus', unit: '', trad: 'Transports', name: 'transport' },
  transportsIsValidate: {
    icon: 'bus',
    unit: '',
    trad: 'Transports',
    name: 'transport',
  },
}

export const images = {
  fire: { icon: gas, name: 'feu' },
  water: { icon: water, name: 'eau' },
  lightning: { icon: lightning, name: 'éclair' },
  trash: { icon: trash, name: 'poubelle' },
  bus: { icon: bus, name: 'bus' },
  transportsIsValidate: { icon: bus, name: 'bus' },
}
