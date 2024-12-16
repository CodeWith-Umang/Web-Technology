const EventEmitter = require('events')

class Myclass extends EventEmitter{}

const ticker = new Myclass()

ticker.on("Post Uploading", () => {
    console.log("Post Uploaded")
})

setInterval(() => {
    ticker.emit('Post Uploading')
},1000)
