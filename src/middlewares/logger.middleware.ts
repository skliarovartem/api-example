import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

  use(req: Request, res: Response, next: Function) {

    const { ip, method, originalUrl: url } = req;
    const hostname = require('os').hostname();
    const userAgent = req.get('user-agent') || '';
    const referer = req.get('referer') || '';
    const now = Date.now();
    res.on('close', () => {
      const { statusCode, statusMessage } = res;
      const contentLength = res.get('content-length');
      Logger.log(`[${hostname}] "${method} ${url}" ${statusCode} ${statusMessage} ${contentLength} "${referer}" "${userAgent}" "${ip}" "${Date.now() - now}"ms`);
    });

    next();
  }
}
