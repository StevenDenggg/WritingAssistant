var Mysql = {
    user: {
        add: 'insert into login (username, email,password) values (?,?,?)',
        select: 'select * from login'
    },
    paras:{
        add:'insert into paras (topic_id, depth, parent, content, author, time)',
        select:'select * from paras'
    }
}

module.exports = Mysql;