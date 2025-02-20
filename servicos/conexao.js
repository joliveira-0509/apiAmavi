import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host:'localhost',
    user: 'apiAmavi',
    password:'amavi123456',
    database:'apiAmavi'
})

export default pool;