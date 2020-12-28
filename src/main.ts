import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV === 'development') {
    app.enableCors();
  }

  const serverConfig = config.get('server');

  //NODE_ENV
  // const serverConfig_ = config.get('jwt');
  // console.log(serverConfig);
  // console.log(serverConfig_);

  const port = process.env.PORT || serverConfig.port;
  await app.listen(port);

  logger.log(`App listening on port ${port}`);
}
bootstrap();
