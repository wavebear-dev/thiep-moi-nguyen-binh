import { NestFactory } from '@nestjs/core';
import { join } from 'node:path';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { console } from 'node:inspector';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Setup EJS template engine
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  console.log(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`✨ Application is running on: http://localhost:${port}`);
}
bootstrap();
