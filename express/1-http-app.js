const http = require('http')
const {readFileSync} = require('fs')

//res.writeHead (statusCode, {statusMessage - o browser já põe, mas pode personalizar} {headers})

//all status code https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
const homePage = readFileSync('./content/index.html')
const homeStyles = readFileSync('./content/styles.css')
const homeImage= readFileSync('./content/logo.svg')
const homeLogic = readFileSync('./content/browser-app.js')


const server = http.createServer((req, res) => {
    console.log('usuário atingiu o servidor');
    console.log(req.url); //print as subpages url

    const url = req.url

    if(url === '/'){
        res.writeHead(200, 'tudo certo!', {'content-type':'text/html'}) 
        res.write(homePage)
        res.end()
    }

    else if(url === '/styles.css'){
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }

    else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }

    else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type':'image/javascript'})
        res.write(homeLogic)
        res.end()
    }

    else{
        res.writeHead(404, {'content-type':'text/html'}) 
        res.write('<h1>page not found</h1>')
        res.end()
    }
})

server.listen(5000)