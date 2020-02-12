const express = require('express')
const getRomanNum = require("./romanNumeral.js")

const app = express()
const PORT = 8080

app.get('/romannumeral', function (req, res) {
    
    //  const {number} = req.query
    //     try {
    //         if (!number) throw Error('No number provided')
    //         // const romanNumeral = getRomanNum(+number)
	// 		// return res.json({romanNumeral})
	// 		// const answer = getRomanNum(req.query.query)
    // 		// return res.json({answer})
    //     } catch(e) {
    //         e.stack && console.log(e.stack)
    //         res.status(400).json({
    //             error: `Failed to convert to Roman Numeral because: ${e.message || e}`,
    //         })
	// 	}
		
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