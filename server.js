const express = require('express')
const getRomanNum = require("./romanNumeral.js")

const app = express()
const PORT = 8080

app.get('/romannumeral', function (req, res) {
    		
    	const answer = getRomanNum(req.query.query)
    	return res.json({answer})
})

app.use((req, res) => {
    return res.status(404).json({
        error: 'This is not a valid route'
    })
})

app.listen(PORT, function(){
    console.log(`Server running on localhost: ${PORT}`)
})
