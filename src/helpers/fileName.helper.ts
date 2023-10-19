/* eslint-disable @typescript-eslint/ban-types */
import { v4 as uuid } from 'uuid';
import { Request } from 'express';

export const fileName = (
  req: Request,
  file: Express.Multer.File,
  cb: Function,
) => {
  if (!file) return cb(new Error('File is empty'), false);

  const fileExtension = file.mimetype.split('/')[1];
  const fileName = `${uuid()}.${fileExtension}`;

  cb(null, fileName);
};
