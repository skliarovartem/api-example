import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from '@nestjs/common';

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();
    const status = exception.getStatus ? exception.getStatus() : 500;
    const responseMessage = exception.getResponse ? exception.getResponse() : '';

    const errorResponse = {
      code: status,
      timestamp: new Date().toTimeString(),
      path: request.url,
      method: request.method,
      message: exception.message,
      responseMessage: responseMessage,
    };

    Logger.error(`${request.method} ${request.url}`, JSON.stringify(errorResponse), 'ExceptionFilter');

    response.status(status).json(errorResponse);
  }
}