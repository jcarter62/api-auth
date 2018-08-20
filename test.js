var uuid = require('uuid');
var sqlite = require('sqlite3').verbose();
var db = new sqlite.Database('./db.sqlite');

db.serialize( () => {
    db.run('create table if not exists test (info text)');

    var stmt = db.prepare('insert into test values (?) ');
    for ( var i = 0; i<10; i++ ) {
        var id = uuid.v4() ;
        stmt.run('value: ' + id );
    }

    stmt.finalize();
});

db.close();