import { plainToClass } from "class-transformer";
import { createUser } from "../db/user";

class signUpParameters {
  name: string
  //phone: string
  email: string
  // Just for testing purposes
  pwd: string
  optionalParam?: string
}

export const signUpHandler = async (req, res) => {
  console.log(`signUpHandler - started execution`)
  try {
    const parameters: signUpParameters = Object.assign(
      req.body,
      plainToClass(signUpParameters, req.body)
    )
     // TODO Check how to validate parameters
    const { name, email, pwd, optionalParam } = parameters


    const createdUser = await createUser({
        email,
        name,
        pwd
    })
    if (!createdUser) {
        res.status(500)
        return
    }

  } catch (error) {
    res.status(500)
  }
  console.log(`signUpHandler - ended execution successfully`);
  res.status(200)
}
