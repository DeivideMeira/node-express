const http = require('http')
const server = http.createServer((req, res) => {
let josé;

  if (req.url === '/') {
    res.end(`
    <h1>Welcome!</h1>
    `)
  } 
  
  else {
    res.end()
  }
})

function generateBornDateFromAge(age) {
  return 2016 - age;
 }
  
  
 function generateUserDescription(name, age) {
  const Name = name;
  const bornDate = generateBornDateFromAge(age);
  
  
  return Name + " is " + age + " old and was born in " + bornDate;
 }
  
  
let UserData = generateUserDescription("Waldemar", 26);
console.log(UserData);

server.listen(3000)