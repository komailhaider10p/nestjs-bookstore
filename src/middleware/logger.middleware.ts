import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        var os = require("os");
        res.set('HostServer', os.hostname());
        console.log('Request "' + req.baseUrl + '" serving by...' + os.hostname());
        next();
    }
}
