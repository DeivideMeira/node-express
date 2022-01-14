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
  
  
  return Name + " tem " + age + " anos e nasceu em " + bornDate;
 }
  
  
let UserData = generateUserDescription("José", 18);
console.log(UserData);

server.listen(3000)