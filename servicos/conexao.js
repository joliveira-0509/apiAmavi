import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host:'localhost',
    user: 'apiAmavi',
    password:'amavi2025',
    database:'apiAmavi'
})

export default pool;