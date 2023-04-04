import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, {
      logger: false,
    });
    const PORT = process.env.PORT || 5000
    app.setGlobalPrefix('api')
    await app.listen(PORT, () => {
      console.log("Port is listening on:", PORT);
    });
  } catch (error) {
    console.log(error);
  }
}
bootstrap();