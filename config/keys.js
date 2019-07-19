module.exports = {
  mongoURI:
    "mongodb+srv://waz:Cursed4252@testcluster-wmkui.mongodb.net/test?retryWrites=true&w=majority",
  secretOrKey: "secret",

  mssqlCon: (sqlconfig = {
    user: "admin",
    password: "Exarkun4252",
    server: "localhost\\SQLEXPRESS",
    Database: "ConvergenceUsers"
  })

  //mssqlCon: "mssql://admin:Exarkun4252@localhost/ConvergenceUsers"

  //"server=localhost;uid=admin;pwd=Exarkun4252!;database=ConvergenceUsers"
};
