const express = require("express");
const app = express();
const port = process.env.PROT || 3000
app.set('view engine', 'hbs');
const path = require("path")
console.log(__dirname)
const x = path.join(__dirname ,"../public")
var hbs = require('hbs');

const viewsDirectory = path.join (__dirname , '../tam1/views')
app.set('views', viewsDirectory);
const partialsPath = path.join(__dirname , "../tam1/partals")
hbs.registerPartials(partialsPath)




app.get("/", (req, res) => {
    res.render('index' , {
title: "home",
   desc:"this is home page",
   img:"image/produ_4.png"



    });
  });


  app.get ('/service' , (req,res) => {
    res.render('service' , {
        title : "faris",
        name: "Mohamed",
        city:"Cairo",
        age:25,
        img:"image/logo.png"
    })
})

app.get ('/team' , (req,res) => {
  res.render('team' , {
      title : "mohammed",
      name: "Ail",
      city:"Cairo",
      age:111,
      img:"image/produ_1.png"
  })
})





app.use(express.static(x))
// app.get('/', (req , res)=>{
// res.send("hello home page")




// })
// app.get("/prices", (req, res) => {
//   res.send("priceeeeeeeeeeeeeeee page");
// });


// app.get("/apbout", (req, res) => {
//   res.send("apbout  page  content");
// });

// app.get("/team", (req, res) => {
//   res.send("team  page  content");
// });
// app.get("/team1", (req, res) => {
//     res.send("team  page  content");
//   });

  app.get("/pedg1", (req, res) => {
    res.send("<h1>my name is faris </h1> <button> confirm </button> ");
  });

  app.get("/pedg2", (req, res) => {
    res.send({
   fname: "faris",
   lname:"mohammed",
   city:"mansoura"
   ,
   age:24


    });
  });
app.listen(port, ()=>{

console.log("app listening on port 3000")

})

