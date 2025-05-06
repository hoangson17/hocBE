const db = require('../utils/db')
module.exports = {
    findAll:()=>{
        return db`SELECT * FROM users`;
    },
    find: async(id)=>{
        const data = await db`SELECT * FROM users WHERE id = ${id}`;
        if(data.length){
            return data[0];
        }
        return null;
    },
    create: async({name,email,password})=>{
        console.log(name, email, password);
        const newUser = await db`
            insert into users (name,email,password) values (${name},${email},${password})
            returning *
        `;
        return newUser[0];
    },

    async existEmail(email, id = 0){
        const data = await db`select * from users where email = ${email} ${id>0 ? db`and id!= ${id}`:db``}`;
        return data.length;
    },
    updatePut: async(data,id)=>{
        const fillable = ['name','email','password'];
        const columns = Object.keys(data);
        const updateUser = await db`update users set ${db(data,columns)} where id = ${id}
            returning *
        `
        console.log(fillable,columns);
    },
    updatePatch: async(data,id)=>{
        const fillable = ['name','email','password'];
        const columns = Object.keys(data);
        console.log(columns);
        let check = true;
        columns.forEach((column)=>{
            if(!fillable.includes(column)){
                check = false;
            }
        })
        if(!check){
            return false;
        }
        const updateUser = await db`update users set ${db(data,columns)} where id = ${id} 
            returning *
        `;
        console.log(data);
        return updateUser[0]
    }
};