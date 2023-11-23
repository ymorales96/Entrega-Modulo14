//Archivo de configuración para la base de datos

//Importar el modulo mysql
const mysql = require('mysql')

//Creando la conexion con mysql
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '4169',
    database: 'hospital'
})

conexion.connect(function (error) {
    if (error) {
        console.log(`Ocurrio un error en la conexion ${error}`)
        return;
    } else {
        console.log('Conexion exitosa')
    }
})

module.exports = {conexion}