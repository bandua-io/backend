import { plainToClass } from "class-transformer";

class signUpParameters {
  name: string;
  phone: string;
  email: string;
  pwd: string;
  optionalParam?: string;
}

export const signUpHandler = async (req, res) => {
  console.log(`signUpHandler - started execution`)
  try {
    const parameters: signUpParameters = Object.assign(
      req.body,
      plainToClass(signUpParameters, req.body)
    )
   // TODO Check how to validate parameters
  } catch (error) {
    res.status(500)
  }
  console.log(`signUpHandler - ended execution successfully`);
  res.status(200)
}
