import { NestFactory } from '@nestjs/core';
import { AppModule } from './features/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
  });
}
bootstrap();
