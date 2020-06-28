import ky from 'ky'
import * as React from 'react'
import { FC } from 'react'
import { useDropzone } from 'react-dropzone'

const onDrop = async (acceptedFiles: readonly File[]): Promise<void> => {
  const formData = new FormData()
  acceptedFiles.forEach((file) => {
    formData.append('file', file)
  })

  const response = await ky
    .post('/upload', {
      body: formData,
    })
    .json()

  console.log(response)
}

const Dropzone: FC = () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here...</p>
      ) : (
        <p>Drag and drop some files here, or click to select files</p>
      )}
    </div>
  )
}

export default Dropzone
