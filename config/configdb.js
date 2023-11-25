const mongoose = require('mongoose');
 async function main(){
    await mongoose.connect('mongodb+srv://vywaharesainath:Sainath19@cluster0.zxszkkv.mongodb.net/Hospital_API_DB?retryWrites=true&w=majority');
    console.log("Connection SuccessFull !!");
}
main().catch((error) =>{console.log("Connection Not Success Full !!");})
