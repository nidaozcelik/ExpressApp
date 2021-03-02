const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const databaseUrl = 'mongodb://127.0.0.1:27017';

const databaseName ='node-dersleri';

MongoClient.connect(databaseUrl, (error, result)=>{

    if(error){
      return console.log("DBye bağlanılamadı"+error);
    }
    console.log("DBye bağlanıldı");
    const db = result.db(databaseName);

});