import express from 'express'

const router = express.Router()

router.get("/receive", (req,res)=>{
    res.send("Receive message endpoint")
})

router.get("/send", (req,res)=>{
    res.send("Send message endpoint")
})

export default router