import {
  Controller, Get, Param,
  Post, Res,
  UploadedFiles,
  UseInterceptors
} from "@nestjs/common";
import { FileService } from "./file.service";
import { AnyFilesInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { editFileName, imageFileFilter } from "../lib/multerOptions";


// @ts-ignore
@Controller("file")
export class FileController {
  constructor(private readonly fileService: FileService) {
  }

  @Get("/:imgpath")
  seeUploadedFile(@Param("imgpath") image, @Res() res) {
    return res.sendFile(image, { root: "./public" });
  }

  @Post("/")
  // @ts-ignore
  @UseInterceptors(FilesInterceptor("files", 5, {
    storage: diskStorage({
      destination: './upload',
      filename: editFileName
    }),
    fileFilter: imageFileFilter
  }))
  uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
    return this.fileService.uploadFiles(files);
  }

}
