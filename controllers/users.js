module.exports = {
    signUp: async( req, res, next ) => {
        console.log('UsersController.signup() called!');
        res.send({'function':'signUp'});
    },
    signIn: async( req, res, next ) => {
        console.log('UsersController.signIn() called!');
        res.send({'function':'signIn'});
    },
    secret: async( req, res, next ) => {
        console.log('UsersController.secret() called!');
        res.send({'function':'secret'});
    }

}