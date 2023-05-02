const express = require("express")
const morgan = require("morgan")

const app = express()
app.use(morgan("dev"))

//Routes
app.get('/api/v1/user/register', (res, req) => {
    try {
        res.status(200).json({
            "status": "success",
            "data": "user has been register"
        })
    } catch (error) {
        res.json({
            "status": "failed",
            error: error.message
        })
    }
})

app.get('/api/v1/user/login', (res, req) => {
    try {
        res.status(200).json({
            "status": "success",
            "data": "user has been login"
        })
    } catch (error) {
        res.json({
            "status": "failed",
            error: error.message
        })
    }
})

app.get('/api/v1/user/post', (res, req) => {
    try {
        res.status(200).json({
            "status": "success",
            "data": "user has post"
        })
    } catch (error) {
        res.json({
            "status": "failed",
            error: error.message
        })
    }
})

app.get('/api/v1/user/comment', (res, req) => {
    try {
        res.status(200).json({
            "status": "success",
            "data": "user has commented"
        })
    } catch (error) {
        res.json({
            "status": "failed",
            error: error.message
        })
    }
})

app.get('/api/v1/user/message', (res, req) => {
    try {
        res.status(200).json({
            "status": "success",
            "data": "user has sent a message"
        })
    } catch (error) {
        res.json({
            "status": "failed",
            error: error.message
        })
    }
})

module.exports = app