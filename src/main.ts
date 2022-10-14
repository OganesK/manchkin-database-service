import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/pipes/validate.pipe';

async function bootstrap () {
  const app = await NestFactory.create(AppModule);

  // gloabal prefix
  app.setGlobalPrefix('api/v1');
  // handle input validation
  app.useGlobalPipes(new ValidateInputPipe());

  const config = new DocumentBuilder()
    .setTitle('Manchkin api-documentation')
    .setDescription('The Manchkin API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
  await app.listen(4000);
}
bootstrap();
