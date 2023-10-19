/* eslint-disable @typescript-eslint/ban-types */
import { Request } from 'express';

export const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: Function,
) => {
  if (!file) return cb(new Error('File is empty'), false);

  const fileExtension = file.mimetype.split('/')[1];
  const validExtensions = ['jpa', 'png', 'jpeg', 'gif'];

  if (!validExtensions.includes(fileExtension)) return cb(null, false);

  cb(null, true);
};
