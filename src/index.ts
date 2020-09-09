import app from './App'

const port = process.env.PORT || 3000
const hostname = process.env.NODE_HOSTNAME || 'localhost';

app.listen(port,hostname, (err) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on ${port}`)
})
