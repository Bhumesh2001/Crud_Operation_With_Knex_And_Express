const knex = require('knex')({
    client:'mysql',
    connection:{
        user:'root',
        host:'localhost',
        database:'crud1',
        password:'1'
    }
})
knex.schema.createTable('crud',(table)=>{
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('email').unique().notNullable()
    table.string('password')
    table.integer('age')
})
.then(()=>{
    console.log('table created successfullly......');
}).catch(()=>{
    console.log('table allready exist.....');
})
module.exports = knex
