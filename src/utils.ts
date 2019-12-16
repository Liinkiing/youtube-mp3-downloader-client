import { EventEmitter } from 'events'

declare global {
  interface Array<T> {
    last(): T

    first(): T
  }
}

Array.prototype.last = function() {
  return this[this.length - 1]
}

Array.prototype.first = function() {
  return this[0]
}

export const YOUTUBE_REGEX = new RegExp(
  '((^(http(s)?:\\/\\/)?((w){3}.)?(music.)?youtube.com?\\/watch\\?v=.+)|(^(http(s)?:\\/\\/)?((w){3}.)?youtu.be?\\/.+))',
)

export const Emitter = new EventEmitter()

export const uuid = (): string => {
  const _p8 = (s?: boolean): string => {
    const p = (Math.random().toString(16) + '000000000').substr(2, 8)
    return s ? '-' + p.substr(0, 4) + '-' + p.substr(4, 4) : p
  }
  return _p8() + _p8(true) + _p8(true) + _p8()
}
