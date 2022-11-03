import { Injectable } from "@nestjs/common";


@Injectable()
export class FileService {
  public uploadFiles(files: Array<Express.Multer.File>) {
    const result = [];

    files.forEach((file) => {
      const res = {
        originalname: file.originalname,
        filename: file.filename
      };
      result.push(res);
    });

    return result;
  }
}
