const express = require('express');
const app = express();

// Function for age verification
function isOldEnoughMiddleware(req,res,next) {
    const age = parseInt(req.query.age);  // convert string to number
    if (age >= 14) {
        next();
    }  else {
        res.status(411).json({
            msg: "sorry you are chota"
        });
    }
}

// Route handler
app.get('/ride1',isOldEnoughMiddleware, function(req, res) {

        res.json({
            msg: "ride 1 chalu"
        });
})

app.get('/ride2',isOldEnoughMiddleware, function(req, res) {
        res.json({
            msg: "ride 2 chalu"
        });
    
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
