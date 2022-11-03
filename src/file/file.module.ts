import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { FileController } from "./file.controller";
import { FileService } from "./file.service";

@Module({
  imports: [
    MulterModule.register({
      dest: "./upload"
    })
  ],
  controllers: [FileController],
  providers: [FileService]
})
export class FileModule {
}
