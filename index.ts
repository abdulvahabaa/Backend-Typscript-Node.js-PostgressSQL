import express from "express";

import sequelize from "./models";

sequelize.authenticate().then(()=>{
    sequelize.sync()
})

const app = express()
const port = process.env.PORT || 3000

// db.sequelize.sync().then(()=>{
//     app.listen(port,()=>console.log(`App is running on ${port}`))
// })
