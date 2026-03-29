import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();

const SK = process.env.jwtSK;

let token;                                                          // Need to store in redis cache
function verifyToken(token) {

    try {
        return jwt.verify(token, SK)                                // Get token in redis
    } catch (error) {
        throw new Error("Invalid Token");
    }
}

function createToken(Data) {
    return jwt.sign({ Data }, SK, { expiresIn: '1H' });       // Extend expiresin
}

export default { createToken, verifyToken }