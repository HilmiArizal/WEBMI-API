const { connection } = require("../Database");


module.exports = {
    addTodo: (req, res) => {
        const queryAddTodo = `INSERT INTO todo SET ?`;
        connection.query(queryAddTodo, req.body, (err, resultsAddTodo) => {
            if(err) return res.status(500).send(err)

            res.status(200).send(resultsAddTodo)
        })
    },
    editTodo: (req, res) => {
        const {name, date, activity, description} = req.body;
        const queryEditTodo = `UPDATE todo SET name = '${name}', date = '${date}', activity = '${activity}', description = '${description}' WHERE idtodo = ${req.query.idtodo}`;
        connection.query(queryEditTodo, (err, resultsEditTodo) => {
            if(err) return res.status(500).send(err)

            res.status(200).send(resultsEditTodo)
        })
    },
    deleteTodo: (req, res) => {
        const queryDeleteTodo = `DELETE FROM todo WHERE idtodo = ${req.query.idtodo}`;
        connection.query(queryDeleteTodo, (err, resultsDeleteTodo) => {
            if(err) return res.status(500).send(err)

            res.status(200).send(resultsDeleteTodo)
        })
    },
    getAllTodo: (req, res) => {
        const queryGetTodo = `SELECT * FROM todo`;
        connection.query(queryGetTodo, (err, resultsGetTodo) => {
            if(err) return res.status(500).send(err)
            
            res.status(200).send(resultsGetTodo)
        })
    }
}