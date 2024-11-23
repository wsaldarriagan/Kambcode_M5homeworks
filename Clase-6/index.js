import http from 'http';
import fs from 'fs';

const port = 3002;

const products = JSON.parse(fs.readFileSync('products.json', 'utf-8'));

const server = http.createServer((req, res) => {
        switch (req.url){
            case '/':
                res.write('Petición inicial');
                res.end();
                break;
            case '/products':
                if(req.method === 'GET'){
                    res.write(JSON.stringify(products));
                    res.end();
                    break
                }
                if(req.method === 'POST'){
                    let body = '';
                    req.on('data', (chunk) => {
                        body += chunk;
                    });

                    req.on('end', () => {
                        const {id, name, price, category } = JSON.parse(body);
                        if(!id || !name || !price || !category){
                            res.writeHead(400);
                            res.write('Faltan datos');
                            res.end();
                            return;
                        }
                        
                        products.push({id, name, price, category});
                        fs.writeFileSync('products.json', JSON.stringify(products));
                        res.writeHead(201);
                        res.write('Producto creado');
                        res.end();
                    });
                    break;
                }
            default:
                res.writeHead(404);
                res.write('404 not found');
                res.end();
                break;
        }

    });

server.listen(port, () => {
    console.log(`Servidor corriendo en pueto: ${port}`);
});
