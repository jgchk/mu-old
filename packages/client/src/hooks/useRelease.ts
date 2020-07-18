import { useSelector } from 'react-redux'
import { RootState } from '../modules'

export default function useRelease(
  id: string
): { title: string; cover: string; artists: string[] } {
  const release = useSelector((state: RootState) => state.library.releases[id])

  return {
    title: release.title,
    cover: release.remoteCovers[0],
    artists: release.artists,
  }
}
