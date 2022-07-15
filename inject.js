
const core = {
    debug:{block:'',head:'0'},
    router:function(req){
        this.status=200
        this.head={'Content-Type': 'application/json'}
        this.head.block=Buffer.from('{}','utf-8')
        this.response={
            status:1
        }
        if(req.url !=='/favicon.ico'){
            this.debug.path=req.url
            if(req.block){
                this.debug.block=req.block
            }else{
                this.debug.block=this.head.block
                this.response.status=0
                this.response.msg='block data not update'
            }          
            this.debug.head=req.headers         
        }

        this.response=JSON.stringify(this.response)

    }
}

require('http').createServer(function(req, res) {
    core.router(req)
    res.writeHead(core.status,core.head);
    res.write(core.response);
    res.end();
    console.log(core.debug)
}).listen(3000);

require('child_process').exec("ngrok.exe http 3000",(error, stdout, stderr)=>{ console.log(stdout)});
console.log('server on port 3000')
  
