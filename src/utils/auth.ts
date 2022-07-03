// import passport from 'passport'
// import bcrypt from 'bcrypt'
// import LocalStrategy from 'passport-local'

// const user = {
//   username: 'test-user',
//   passwordHash: 'bcrypt-hashed-password',
//   id: 1
// }

// passport.use(new LocalStrategy.Strategy(
//  (username, password, done) => {
//     findUser(username, (err, user) => {
//       if (err) {
//         return done(err)
//       }

//       // User not found
//       if (!user) {
//         return done(null, false)
//       }

//       // Always use hashed passwords and fixed time comparison
//       bcrypt.compare(password, user.passwordHash, (err, isValid) => {
//         if (err) {
//           return done(err)
//         }
//         if (!isValid) {
//           return done(null, false)
//         }
//         return done(null, user)
//       })
//     })
//   }
// ))