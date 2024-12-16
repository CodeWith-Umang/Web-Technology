const express = require('express')

const app = express();

const data = ['Darshan', 'University', 'Rajkot', 'Gujarat']

app.get('/data/:Id', (req,res) => {
    console.log(data[data.params.Id])
})

app.listen(8000, () => {
    console.log('Server is running on port 8000')
})

