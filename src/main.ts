import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService: ConfigService = app.get(ConfigService);

  const port = configService.get<number>('PORT');

  await app.listen(port, () => {
    Logger.log(`Listening at http://localhost:${port}`);
  });
}
bootstrap();
