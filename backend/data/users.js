import bcrypt from 'bcryptjs';

const users = [
    { 
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    { 
        name: 'mahesh',
        email: 'mahesh@example.com',
        password:bcrypt.hashSync('123456', 10),
        
    },
    { 
        name: 'siddarth',
        email: 'siddarth@example.com',
        password:bcrypt.hashSync('123456', 10),
        
    },

]
export default users;