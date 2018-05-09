const { Router } = require('express')

const users = require('./users')

const router = Router()

// Add USERS Routes
router.use(users)

router.get('/appointment', (req, res) => {
  console.log('/appointment ===============================>')
})

module.exports = router
