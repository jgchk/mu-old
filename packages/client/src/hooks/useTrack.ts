import { useSelector } from 'react-redux'
import { RootState } from '../modules'

export default function useTrack(
  id: string
): { title: string; artists: string[]; release: string } {
  const track = useSelector((state: RootState) => state.library.tracks[id])

  return { title: track.title, artists: track.artists, release: track.release }
}
