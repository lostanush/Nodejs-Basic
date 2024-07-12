console.log("Hello World from Nodejs !");
const bodyParser= require("body-parser")
const expressValidator = require("express-validator")

//database connection


//bring in routs
const postRoutes = require('./routes/post');

    //middleware
    /*
    const myownMiddleware= (req,res,next)=>{
        console.log("Middlware Applied !! ")
        next();
    }
    app.use(myownMiddleware)
    */

app.use(morgan("dev"))
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/",postRoutes);  //using .use instead of get and then .listen

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`A nodejs api is listening on port : ${port}`);
});
