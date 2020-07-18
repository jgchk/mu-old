import { useSelector } from 'react-redux'
import { RootState } from '../modules'

export default function useArtist(id: string): { name: string; image: string } {
  const artist = useSelector((state: RootState) => state.library.artists[id])

  return {
    name: artist.name,
    image:
      'https://pixabay.com/get/53e3d043485ba414f6da8c7dda79357d133edae44e507440702f79d1944cc6_1280.jpg',
  }
}
