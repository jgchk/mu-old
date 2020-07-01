import { SearchResult } from '@mu/api'
import got from 'got/dist/source'
import getClientId from './client-id'
import { SearchPager } from './types'

const baseUrl = 'https://api-v2.soundcloud.com/search'

export async function search(query: string): Promise<SearchResult[]> {
  const clientId = await getClientId()
  const { collection } = await got(baseUrl, {
    searchParams: { q: query, client_id: clientId },
  }).json<SearchPager>()
  return collection
    .filter((item) => item.kind === 'track' || item.kind === 'playlist')
    .map((item) => ({
      title: item.title,
      artist: item.user.username,
      coverUrl: item.artwork_url?.replace('large', 't500x500') ?? undefined,
      source: 'soundcloud',
      id: `${item.kind}/${item.id}`,
      kind: (() => {
        if (item.kind === 'playlist') return 'album'
        if (item.kind === 'track') return 'track'
      })(),
    }))
}
