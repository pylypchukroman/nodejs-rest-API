const mongoose = require('mongoose').default;
const app = require('./app');
const DB_HOST = "mongodb+srv://Roman:enterme@cluster0.szr8x2o.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST).then(() => {
  app.listen(3000);
  console.log("Database connection successful");
}).catch(error => {
  console.log(error.message);
  process.exit(1);
})
