import { Identifiable, Id } from '../common/interfaces'

export type Artist = Identifiable & {
  readonly name: string
}

export type Album = Identifiable & {
  readonly title: string
}

export type Track = Identifiable & {
  readonly title: string
}

export type AlbumTrack = Identifiable & {
  readonly albumId: Id
  readonly trackId: Id
}

export type ArtistAlbum = Identifiable & {
  readonly artistId: Id
  readonly albumId: Id
}

export type ArtistTrack = Identifiable & {
  readonly artistId: Id
  readonly trackId: Id
}
