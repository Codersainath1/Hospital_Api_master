const mongoose = require('mongoose');
 async function main(){
    await mongoose.connect('mongodb+srv://vywaharesainath:Sainath19@cluster0.zxszkkv.mongodb.net/employee_review?retryWrites=true&w=majority');
    console.log("Connection SuccessFull !!");
}
main().catch((error) =>{console.log("Connection Not Success Full !!");})
