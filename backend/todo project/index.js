import dns from "node:dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectToDb from './db/db.js'
connectToDb()
import todoModel from "./model/todo.model.js";
import { log } from "node:console";



const app = express()
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/todos', async (req, res) => {
    try {
        const { title, description } = req.body
        const todo = await todoModel.create({
            title,
            description
        })
        res.status(200).json({
            todo
        })
    }
    catch (error) {
        console.log(error)
    }
})

app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { title, description } = req.body
        const todo = await todoModel.findById(id)
        if (!todo) {
            return res.status(401).json({
                message: "todo not found"
            })
        }
        if (title) {
            todo.title = title
        }
        if (description) {
            todo.description = description
        }
        await todo.save()

        res.status(200).json({
            todo
        })

    }
    catch (error) {
        console.log(error)
    }
})

app.patch('/todos/:id/toggle', async (req, res) => {
    try {
        const { id } = req.params
        const todo = await todoModel.findById(id)
        if (!todo) {
            return res.status(401).json({
                message: "todo not found"
            })
        }
        todo.completed = !todo.completed
        await todo.save()

        res.status(200).json({
            todo
        })

    }
    catch (error) {
        console.log(error)
    }
})

app.get('/todos', async (req, res) => {
    try {
        const todo = await todoModel.find()

        res.status(200).json({
            todo
        })

    }
    catch (error) {
        console.log(error)
    }
})
app.get('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params
        const todo = await todoModel.findById(id)


        res.status(200).json({
            todo
        })

    }
    catch (error) {
        console.log(error)
    }
})

app.delete('/todos/:id', async(req, res) => { 
    try {
        const { id } = req.params
        const todo = await todoModel.findById(id)
        if (!todo) {
            return res.status(401).json({
                message: "todo not found"
            })
        }
        await todoModel.findByIdAndDelete(id) 

        res.status(200).json({
            message : "todo delete Succesfully"
        })

    }
    catch (error) {
        console.log(error)
    }
})

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000')
})
