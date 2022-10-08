import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/pipes/validate.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //gloabal prefix
  app.setGlobalPrefix('api/v1');
  //handle input validation
  app.useGlobalPipes(new ValidateInputPipe());
  await app.listen(4000);
}
bootstrap();
