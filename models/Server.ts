import express, { Application } from 'express';
import cors from 'cors';

import cryptoRoutes from '../routes/crypto';

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        crypto: '/api/crypto'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8081';
        this.middlewares();
        this.routes();
    };

    middlewares() {
        this.app.use( cors() )
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use( this.apiPaths.crypto, cryptoRoutes );
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Server working on port ${ this.port }`);
            console.log(`http://localhost:${ this.port }/`);
        });
    }
}

export default Server;