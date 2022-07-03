import express from 'express'
import { signUpHandler } from './handlers/signUpHandler'
import { loginHandler } from './handlers/loginHandler'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Bandua Homepage')
})

router.get('/login', loginHandler) 
router.get('/signup', signUpHandler)


//User
//router.get('/list_users', listUsers)

export default router