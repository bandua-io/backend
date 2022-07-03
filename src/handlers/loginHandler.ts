export const loginHandler = async (req, res) => {
    console.log(`loginHandler - started execution!`)
    try {
        // Implement after having the auth set
    } catch (error) {
        console.log(`loginHandler - Error during execution, Error: ${error}`)
        res.status(500)
    }
    console.log(`loginHandler - ended execution successfully`)
    res.status(200)
}