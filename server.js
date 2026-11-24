const http=require("http")
const server=http.createServer((req,res)=>
{
    res.end("Hello ! responce from server");
})
server.listen(3000); 