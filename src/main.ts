import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() { //함수 이름을 바꿔도 됨
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
