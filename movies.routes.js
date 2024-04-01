module.exports = app =>{
    app.get("/api/movie", (req,res)=>{
        console.log("movie route")
        res.end()
    })
}