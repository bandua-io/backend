import express from 'express'

const router = express.Router()

/* default test route */
router.get('/', (req, res) => {
    res.send('Hello World!')
})

export default router