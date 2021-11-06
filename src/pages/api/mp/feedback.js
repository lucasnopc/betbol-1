
export default async function feedback(req, res) {
    console.log(req.query)
    res.status(200).json({status: req.query})
}