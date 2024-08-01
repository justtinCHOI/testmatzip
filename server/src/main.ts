import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3030;
  const corsOptions: CorsOptions = {
    origin: 'http://192.168.0.155:8081', // React Native 앱의 IP와 포트
    credentials: true, // 인증 정보를 허용하려면 true로 설정
  };

  app.enableCors(corsOptions);
  await app.listen(port);
  console.log(`Server is running at http://localhost:${port}`);
}
bootstrap();
