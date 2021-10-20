require("dotenv").config();
const Express = require("express");
const app = Express();
const dbConnection = require("./db");
const controllers = require("./controllers");

app.use(Express.json());
app.use("/log", controllers.workoutController);
app.use("/user", controllers.userController);

dbConnection.authenticate()
       .then(() => dbConnection.sync())
       .then(() => {
        app.listen(3003, () => {
          console.log(`[Server]: App is listening on 3003.`);
        }) 
      }) 

       .catch((err) => {
         console.log(`[Server]: Server crashed. Error = ${err}`);
});