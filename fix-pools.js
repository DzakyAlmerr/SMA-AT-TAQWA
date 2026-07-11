const fs = require('fs');

function fixFile(path) {
    let content = fs.readFileSync(path, 'utf8');
    const regex = /const pool = new Pool\(\{\s*user: process\.env\.DB_USER \|\| 'postgres',\s*host: process\.env\.DB_HOST \|\| 'localhost',\s*database: process\.env\.DB_NAME \|\| 'smart_school',\s*password: process\.env\.DB_PASSWORD \|\| 'password',\s*port: process\.env\.DB_PORT \|\| 5432,?\s*\}\);/g;
    
    const replacement = `const poolConfig = process.env.DATABASE_URL 
    ? { connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } }
    : {
        user: process.env.DB_USER || 'postgres',
        host: process.env.DB_HOST || 'localhost',
        database: process.env.DB_NAME || 'smart_school',
        password: process.env.DB_PASSWORD || 'password',
        port: process.env.DB_PORT || 5432,
    };
const pool = new Pool(poolConfig);`;

    const newContent = content.replace(regex, replacement);
    fs.writeFileSync(path, newContent);
    console.log('Fixed', path);
}

fixFile('routes/index.js');
