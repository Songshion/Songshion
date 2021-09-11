const router = require('express').Router()
const db = require('../../models')

//localhost:3001/api/todos/
router.get('/', async (req, res) => {
  const data = await Concert.find({})
  res.status(200).json(data)
})