import * as React from 'react'
import { FC, useState, FormEvent } from 'react'

const AddRelease: FC = () => {
  const [url, setUrl] = useState('')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type='url'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type='submit' disabled={url.length === 0}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddRelease
