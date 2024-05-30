const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/e-com");

/*let productSchema=new mongoose.Schema(
    {name:'string',
     brand:'string' ,
     price:'number'  
    })
   main=async()=>{
let product=mongoose.model('products',productSchema); 
let data=new product({
    name:'m8',
    brand:'samsung',
    price:3000
}) 
let result=await data.save() 
console.log(result);
} 




//update
const updateIn=async()=>{
    const product=mongoose.model('products',productSchema);
    let data=await product.updateMany(
        {name:'m8'},
        {$set:{name:'m9'}}
    )
    console.log(data)
}
//updateIn()




//delete
const deleteIn=async()=>{
    const product=mongoose.model('products',productSchema);
    let data=await product.deleteMany({name:'m9'});
    console.log(data)
}
//deleteIn()





//find
const findIn=async()=>{
    const product=mongoose.model('products',productSchema);
    let data=await product.find();
    console.log(data)
}
findIn()*/