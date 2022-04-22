const admin = require("../firebase/firebase-config");
class Middleware {
    async decodeToken(req, res, next) {
        const token = await req.headers.authorization.split(" ")[1];

        try {
            const decodeValue = await admin.auth().verifyIdToken(token);
            req.user = decodeValue;
            if (decodeValue) {
                return next();
            } else {
                return res.json({ message: "Unauthorize" });
            }
        } catch (error) {
            console.log(error.message);
            return res.json({ message: "Internal Error" });
        }
    }
}

module.exports = new Middleware();
