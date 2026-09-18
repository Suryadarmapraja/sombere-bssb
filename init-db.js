require('dotenv').config();
const fs=require('fs'); const path=require('path'); const bcrypt=require('bcryptjs'); const {Pool}=require('pg');
(async()=>{const pool=new Pool({connectionString:process.env.DATABASE_URL,ssl:process.env.NODE_ENV==='production'?{rejectUnauthorized:false}:undefined});
try{await pool.query(fs.readFileSync(path.join(__dirname,'schema.sql'),'utf8'));
const username=process.env.ADMIN_USERNAME||'admin'; const password=process.env.ADMIN_PASSWORD; const name=process.env.ADMIN_NAME||'Master Administrator';
if(password){const hash=await bcrypt.hash(password,12); await pool.query(`insert into users(username,full_name,role,password_hash,is_active) values($1,$2,'Master Administrator',$3,true) on conflict(username) do nothing`,[username,name,hash]);}
console.log('Database SOMBERE siap.');} finally {await pool.end();}})().catch(e=>{console.error(e);process.exit(1)});
