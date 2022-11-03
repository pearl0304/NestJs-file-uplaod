import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import { AppModule } from "./app.module";


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule
  );

  app.useStaticAssets(join(__dirname, "..", "upload"));
  await app.listen(9001).then(() => {
    console.log(`http://localhost:9001`);
  });
}

bootstrap();
