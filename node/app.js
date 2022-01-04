const http = require('http')

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.end(`
    <h1>Welcome!</h1>
    <h2>Please entire your name:</h2>
    <input type="text" value="name"/> </br></br>
    <h2>Please entire your year of age:</h2>
    <input type="number" value="age"/> </br></br>
    <button type="submit"></button>
    `)
  } 
  
  else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
  }
})

function generateBornDateFromAge(age) {
    return 2016 - age;
   }
    
    
   function generateUserDescription(name, age) {
    const fullName = name + " ";
    const bornDate = generateBornDateFromAge(age);
    
    
    return fullName + " is " + age + " old and was born in " + bornDate;
   }
    
    
   generateUserDescription("Waldemar", 26);

server.listen(3000)