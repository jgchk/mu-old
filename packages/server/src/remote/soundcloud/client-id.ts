import Bluebird from 'bluebird'
import got from 'got'

let clientId: string | undefined

async function fetchClientId(): Promise<string> {
  const { body } = await got('https://soundcloud.com')

  const scriptUrls = [
    ...body.matchAll(/<script crossorigin src="(.+)"><\/script>/gm),
  ].map((match) => match[1])

  const clientIdRegex = /{client_id:"([\dA-Za-z]+)"}/
  const clientId = await Bluebird.any(
    scriptUrls.map(async (scriptUrl) => {
      const { body: script } = await got(scriptUrl)
      const match = clientIdRegex.exec(script)
      if (match === null) throw new Error('client id not found')
      return match[1]
    })
  )

  if (!clientId) throw new Error('no client id found')
  return clientId
}

export default async function getClientId(): Promise<string> {
  if (!clientId) clientId = await fetchClientId()
  return clientId
}
