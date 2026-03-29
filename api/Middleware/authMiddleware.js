import jwtServices from "../jwt/jwtService.js";

function authenticateToken(req, res, next) {
    const token = req.headers['authorization']
    if (!token) return res.status(403).send("No token provided")
    try {
        const data=jwtServices.verifyToken(token)
        req.data=data;
        next()
    } catch (error) {
        res.status(401).send(error.message)
    }
}

export default authenticateToken;