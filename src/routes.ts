import express from 'express'
import { testHandler } from './handlers/testHandler'

const router = express.Router()

/* default test route */
router.get('/', (req, res) => {
    res.send('Homepage')
})
 
router.get('/test', testHandler)

export default router