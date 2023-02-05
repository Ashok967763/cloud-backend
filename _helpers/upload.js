const path = require('path');
const multer =  require('multer')


var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads/')
    },
    filename:function(req,file,cb){
        let ext = path.extname(file.originalname)
        cb(null,Date.now() + ext)
    }
})

var upload = multer({
    storage:storage,
    fileFilter: function(req,file,cb){
        console.log("->in fucntion-->",file)
        if(file.mimetype == "text/plain"){
            cb(null,true) 
        }
        else{
            console.log("only txt files are supported");
        }
    },
    limits: {
        fileSize: 1024 * 1024 *2
    }
})

module.exports = upload