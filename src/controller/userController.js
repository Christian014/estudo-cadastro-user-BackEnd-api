const knexConfig = require("../../knexfile");
const knex = require("knex")(knexConfig.development);

    async function create(req, res){

          const { name, email, password } = req.body

        console.log(name, email, password)

        await knex('users').insert({
            name,
            email ,
            password,
        });

        res.json({name, email, password})
    }


module.exports = create;
