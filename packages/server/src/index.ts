import createApp from './server'

const main = async () => {
  const app = await createApp()
  const port = process.env.PORT || 3000

  app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
}

if (require.main === module) {
  void main()
}
