const path = require('path')
const express = require('express')
const app = express()
const publicPath = path.join(__dirname, '..', 'public')

// Serves up all assets from the public directory
app.use(express.static(publicPath))

// * matches all unmatched routes
// this has to be done to get a single page application with react routes
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(3000, () => {
  console.log('Server is running!')
})