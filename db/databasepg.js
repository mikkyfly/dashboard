

const {Client} = require('pg');

const client = new Client({
    host:"192.168.0.122",
    user: "postgres",
    port: 5432,
    password:"m5nzk3i2",
    database: "snmp"
});


client.connect();

while(true){
    setTimeout(function(){
        client.query(`Select * from ups`, (err, res)=>{
            if(!err){
                console.log(res.rows);
            }else{
                console.log(err.message);
            }
            client.end;
        });
    },1000);
}
/*for (let i = 0; i < 5; i++) {
    setTimeout(function(){
        client.query(`Select * from ups`, (err, res)=>{
            if(!err){
                console.log(res.rows);
            }else{
                console.log(err.message);
            }
            client.end;
        });
    },1000);
    
}


client.query(`Select * from ups`, (err, res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    client.end;
});*/