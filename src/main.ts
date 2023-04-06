import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const PORT = process.env.PORT || 5000
    app.setGlobalPrefix('api')
    await app.listen(PORT, () => {
      console.log("Port is listening on:", PORT);
    });
    console.log(PORT);
    
  } catch (error) {
    console.log(error);
  }
}
bootstrap();