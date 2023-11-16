const users = [
    {
        id:"12345",
        name:"ShazebK",
    },
];

module.exports = class User{
    constructor(user){
        this.name = user.name;
    }   

    save(){
        this.id = Math.floor(Math.random() * 10000).toString();
        users.push(this);
    }

    static fetchUser(id){
        const user = users.find(user => user.id === id);
        return user;
    }
}