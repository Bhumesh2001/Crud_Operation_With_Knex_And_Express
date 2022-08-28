const express = require('express');
const app = express();
const knex = require('./db/database');
const port = 3000;
app.use(express.json());    
//  insert data
app.post('/post',async(req,res)=>{
    try {
        await knex('crud').insert(req.body)
        res.send(req.body)
    } catch (error) {
        res.send('data not insert successfully...')
    }
})
// show all user data
app.get('/show',async(req,res)=>{
    try {
        const info = await knex('crud')
        res.send(info)
    } catch (error) {
        res.send('something error')
    }
})
// show single user data
app.get('/single/:id',async(req,res)=>{
    try {
        const log = await knex('crud').where({id:req.params.id})
        if(log != 0){
            res.send(log)
        }
        else{
            res.send('user data not found')
        }
    } catch (error) {
        res.send(error.message)
    }
})
// user login
app.get('/login',async(req,res)=>{
    try {
        const log = await knex('crud').where(req.body)
        if(log != 0){
            res.send(log)
        }
        else{
            res.send('user data not found')
        }
    } catch (error) {
        res.send(error.message)
    }
})
// update user data
app.put('/update/:id',async(req,res)=>{
    try {
        const log = await knex('crud').where({id:req.params.id}).update(req.body)
        if(log != 0){
            res.send({message:'user data update successfully',status:req.body})
        }
        else{
            res.send('data not updated')
        }
    } catch (error) {
        res.send(error.message)
    }
})
// delete user data
app.delete('/delete/:id',async(req,res)=>{
    try {
        const log = await knex('crud').where({id:req.params.id}).delete(req.body)
        if(log != 0){
            res.send('data deleted successfully...')
        }
        else{
            res.send("user not found")
        }
    } catch (error) {
        res.send(error.message)
    }
})
app.listen(port,()=>{
    console.log(`server running at ${port}`);
})
