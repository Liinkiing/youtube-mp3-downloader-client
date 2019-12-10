export type ID = string

interface AudioHref {
  download: string
}

interface AudioRequestHref {
  self: string
}

export interface AudioRequest {
  youtubeUrl: string
  audio: Audio | null
  createdAt: string
  updatedAt: string
  id: string
  _href: AudioRequestHref
}

export interface Audio {
  id: ID
  filename: string
  mimeType: string
  title: string
  artist: string | null
  displayName: string | null
  createdAt: string
  updatedAt: string
  _href: AudioHref
}

export interface PostAudioRequestBody {
  youtubeUrl: string
}

export type GetAudioRequests = readonly AudioRequest[]
export type GetAudioRequest = Readonly<AudioRequest>
export type PostAudioRequest = Readonly<AudioRequest>
