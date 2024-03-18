# NodeJS-Code-Challenge

## Prerequisite

#### A. Pre requisites to run locally
1. mysql
2. NPM / Node 20.X

#### B. Install all dependencies locally
1. ```npm install```

#### C. Running migrations
I'm using Sequelize migration

1. Edit credentials in `src/database/config.json` for your root mysql connection if necessary

``` sh
"development": {
    "username": "root",
    "password": null,
    "database": "nodejs_exam",
    "host": "localhost",
    "dialect": "mysql"
  }
```

Run command for checking database connection

2. ```npm run db:check:connection ```

``` sh
# Success Response

info: Connection to the database has been established successfully
```

Run command for creating database, migration and seeder

3. ```npm run db:create:all```

#### D. Run locally
1. ```npm run dev```

Success logs:
```sh
> nodejs-code-challenge@1.0.0 dev
> node src

info: Listening on port 3000
```

#### C. Scripts for Running Test

1. ```npm run test```


