export const testHandler = async (req, res) => {
    console.log(`testHandler - started execution!`)

    const body = {
        a: "a",
        b: "b"
    }
    
    console.log(`testHandler - ended execution!!!`)
    res.status(200).send(body)
}