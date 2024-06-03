import { Request, Response, RequestHandler, NextFunction } from 'express'
import multer from 'multer'

export const adaptMulter: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const upload = multer().any()
  upload(req, res, (error: unknown) => {
    req.body = Object.fromEntries(
      Object.entries(req.body).filter(([_, v]) => v !== 'undefined')
    )

    Object.entries(req.body).forEach(([k, v]) => {
      if (v === 'true') v = true
      if (v === 'false') v = false
      req.body[k] = v
    })

    if (error !== undefined) {
      console.log(error)
      return res.status(500).json({ error: error })
    }

    return next()
  })
}
