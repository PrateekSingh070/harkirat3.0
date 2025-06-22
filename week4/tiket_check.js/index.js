const express = require('express');
const app = express();

// Function for age verification
function isOldEnough(age) {
    if (age >= 14) {
        return true;
    } else {
        return false;
    }
}

// Route handler
app.get('/ride1', function(req, res) {
    const age = parseInt(req.query.age);  // convert string to number

    if (isOldEnough(age)) {
        res.json({
            msg: "ride 1 chalu"
        });
    } else {
        res.status(411).json({
            msg: "sorry you are chota"
        });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
