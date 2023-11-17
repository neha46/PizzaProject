const mongoose=require('mongoose');
const db=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Pizza')
        console.log(`database connected successfully`)
    } catch (error) {
        console.log(`database connection failedcase of ${error.message}`)
    }
}
module.exports=db;