const express = require('express')
const router = express.Router()

router.get('/otameshi', (req, res, next) => {
  const param = { response: 'success' }
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param)
})

module.exports = router
