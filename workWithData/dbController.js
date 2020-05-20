const mysql = require("mysql2");

const connection = mysql.createConnection({
    HOST: 'us-cdbr-iron-east-04.cleardb.net',
    USER : 'b076a5a3793807',
    PASSWORD:'66aedf4e43e29a3',
    DB:'heroku_a89387c08d3cdad'
});
connection.connect(function(err){
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else{
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});