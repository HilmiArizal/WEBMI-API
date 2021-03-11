const { connection } = require("../Database");
const Crypto = require("crypto");
const { createJWTToken } = require("../Helpers/jwt");


module.exports = {
    registerUser: (req, res) => {
        const { email, username, password } = req.body;
        const hashPassword = Crypto.createHmac('sha256', 'keyWebmi').update(password).digest('hex');
        const queryAddUser = `INSERT INTO users (email, username, password) VALUES ('${email}', '${username}', '${hashPassword}')`
        connection.query(queryAddUser, (err, resultsAddUsers) => {
            if (err) return res.status(500).send(err)

            res.status(200).send(resultsAddUsers)
        })
    },
    loginUser: (req, res) => {
        const { username, password } = req.body;
        const hashPassword = Crypto.createHmac('sha256', 'keyWebmi').update(password).digest('hex');
        const queryLoginUser = `SELECT * FROM users WHERE username = '${username}'`;
        connection.query(queryLoginUser, (err, resultsLoginUser) => {
            if (err) return res.status(500).send(err)

            if (!username || !password) return res.status(500).send('The form cannot be blank')
            if (resultsLoginUser.length === 0) return res.status(500).send("Username not registered")
            if (resultsLoginUser[0].password !== hashPassword) return res.status(500).send("Password it's wrong")

            const token = createJWTToken({...resultsLoginUser[0]});
            res.status(200).send({...resultsLoginUser[0], token});
        })
    }
}