require('dotenv').config()
const yargs = require('yargs')
const http = require('http')
const jimp = require('jimp')
const fs = require('fs')
const url = require('url')

const PORT = process.env.PORT || 3000
const key = process.env.KEY


let server = () => {
    http.createServer((req, res) => {

        
        if (req.url == '/') {            
            res.writeHead(200, { 'Content-Type': 'text/html' })
            fs.readFile('index.html', 'utf8', (err, html) => {
                res.end(html)
            })
        }
        
        if (req.url == '/estilos') {
            res.writeHead(200, { 'Content-Type': 'text/css' })
            fs.readFile('estilos.css', (err, css) => {
                res.end(css)
            })
        }
        
        if (req.url.includes('/bn')) {            
            const params = url.parse(req.url, true).query
            const urlImg = params.url
            
            jimp.read(urlImg, (err, img) => {
                if (!err) {
                    img
                        .resize(350, jimp.AUTO)
                        .greyscale()
                        .quality(60)
                        .writeAsync('newImg.jpg')
                        .then(() => {
                            fs.readFile('newImg.jpg', (err, imagen) => {
                                res.writeHead(200, { 'Content-Type': 'image/jpeg' })
                                res.end(imagen)
                            })
                        })
                } else {
                    res.end('There was an error processing your image, please make sure the image url is correct')
                }
            })
        }
    })
        .listen(PORT, () => console.log(`Server runing on port ${PORT}`))
}


const yarg = yargs.command('server', 'It is used to run the server if the provided key is correct',
    {
        key: {
            describe: 'validates execution',
            demand: true,
            alias: 'k',
        },
    },
    (args) => {
        args.key == key ?
            server() : console.log('Wrong Key')
    })
    .help().argv


