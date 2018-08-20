module.exports = {
    signUp: async( req, res, next ) => {
        //
        // expect email and password
        //
        console.log('UsersController.signup() called!');
        res.send({'function':'signUp'});
    },
    signIn: async( req, res, next ) => {
        //
        // generate token
        //
        console.log('UsersController.signIn() called!');
        res.send({'function':'signIn'});
    },
    secret: async( req, res, next ) => {
        //
        console.log('UsersController.secret() called!');
        res.send({'function':'secret'});
    },
    test: async( req, res, next ) => {
        // generate some data.
        console.log('UsersController.test() called!');
        //
        const dbfile = __basedir + '/data.sqlite';
        var knex = require('knex')({
            client: 'sqlite3',
            connection: { filename: dbfile}
        });
        knex('sessions').insert({id: '12345'});


        res.send({'function':'test'});
    }

}