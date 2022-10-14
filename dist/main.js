"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const validate_pipe_1 = require("./core/pipes/validate.pipe");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(new validate_pipe_1.ValidateInputPipe());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Manchkin api-documentation')
        .setDescription('The Manchkin API description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map