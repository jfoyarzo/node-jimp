//Definición de variables para los módulos a utilizar
const yargs = require('yargs')
const http = require('http')
const jimp = require('jimp')
const fs = require('fs')
const url = require('url')
//Definición de variable para la key necesaria para levantar el servidor
const key = '123'

//Función para levantar el servidor con 'http'
let server = () => {
    http.createServer((req, res) => {

        //Habilitación de ruta raiz del sitio
        if (req.url == '/') {
            //Se devuelve el contenido del archivo index.html
            res.writeHead(200, { 'Content-Type': 'text/html' })
            fs.readFile('index.html', 'utf8', (err, html) => {
                res.end(html)
            })
        }

        //Habilitación de la ruta para los estilos CSS personalizados
        if (req.url == '/estilos') {
            res.writeHead(200, { 'Content-Type': 'text/css' })
            fs.readFile('estilos.css', (err, css) => {
                res.end(css)
            })
        }

        //Habilitación de ruta para procesar la imagen
        if (req.url.includes('/bn')) {
            //Se captura la query de la url y se inicializa variable para la url de la imagen
            const params = url.parse(req.url, true).query
            const urlImg = params.url

            //Instrucciones para la modificación de la imagen mediante el módulo Jimp y fs.
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
                    res.end('ERROR, no se pudo procesar el archivo, asegúrese que la url sea la correcta')
                }
            })
        }
    })
        .listen(3000, () => console.log('Escuchando el puerto 3000'))
}


//Inicialización de variable para el comando personalizado de yargs
const yarg = yargs.command('server', 'Es un comando para levantar un servidor localmente',
    {
        key: {
            describe: 'Se utiliza para validar la ejecucion',
            demand: true,
            alias: 'k',
        },
    },
    //Función callback para verificar que se haya introducido la key correcta como argumento y, de ser así, ejecuta la función para levantar el servidor
    (args) => {
        args.key == key ?
            server() : console.log('Key incorrecta')
    })
    .help().argv


