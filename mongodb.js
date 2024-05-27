const MongoClient=require('mongodb').MongoClient;
const url='mongodb://localhost:27017';
const databaseName='e-com'
//const client=new MongoClient(url);




async function dbConnect()
{
    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log("Connection Error",err); });

    if (!client) {
        return;
    }

    try {

        const db = client.db(databaseName);
        //console.log("ssss===>",db);
        return db;

    } catch (err) {

        console.log(err ,"DB connection with MongoDB Failed");
    } 


    
    //return db.collection('products');
}
module.exports=dbConnect;