import { atom, selector } from 'recoil'

export const countState = atom<number>({
  key: 'countState',
  default: 1,
})

export const doubleCountState = selector({
  key: 'doubleCountState',
  get({ get }) {
    const count = get(countState)

    return count * 2
  },
})
