module.exports = (app) => {
  app
    .get('/api/nav', (req, res) => {
      // res.status(404).send('Not Found');
      res.json(require('./mocks/nav/nav.json'))
    })
}
