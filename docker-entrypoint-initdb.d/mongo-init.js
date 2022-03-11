db.createUser(
    {
        user: "dev",
        pwd: "projectx",
        roles: [
            {
                role: "readWrite",
                db: "DB_PX"
            }
        ]
    }
);

db.createCollection('users');
