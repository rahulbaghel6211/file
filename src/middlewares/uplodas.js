const path=require("path")

const multer=require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null,path.join(__dirname,"../uploads"))
    },
    filename: function (req, file, callback) {
      const uniquePrefix = Date.now() //+ '-' + Math.round(Math.random() * 1E9)
      callback(null, uniquePrefix + '-' + file.originalname)
    }
  });

  const fileFilter= (req, file, callback)=>{

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
  
   if(file.mimetype==="image/jpeg"||file.mimetype==="image/png"){

    callback(null, true);
   }
   else{
    callback(null, false)

   }
  };

const options={
    storage:storage,
    fileFilter:fileFilter,
    limits:{
        fileSize:1024*1024*5,
    },
};
const uploads=multer();
module.exports=uploads;