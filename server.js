var pg = require("pg");
var connectionString = "postgres://uuthvknysrnvir:4a21fc52deeaed73cd924fd72df8c709e42fbe592f9fecb4a52eb28f9cd02c9c@ec2-54-83-23-91.compute-1.amazonaws.com:5432/da07o0n5a9a2h3"
var pgClient = new pg.Client(connectionString);
pgClient.connect();