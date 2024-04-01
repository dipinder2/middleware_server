module.exports = router => {
    router.use("/api/movie", (req,res,next)=>{
        console.log("middleware movie")
        next()
    })
}