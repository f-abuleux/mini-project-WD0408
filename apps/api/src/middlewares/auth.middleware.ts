import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

//PAKAI INI KALAU ADMIN MAU AKSES SELURUH PEMBELI KETIKA GET IDUSER
//CHECKOUT HARUS VERIFIKASI TOKEN

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
      try {
            let token = req.headers.authorization?.replace("Bearer ", "")

            // token ada atau tidak ada

            if (!token) {
                  return res.status(401).json({ message: 'Unauthorized' });
            }

            //token masih valid atau tidak

            const user =  verify(token, process.env.SECRET_KEY!)

            // verify(token, process.env.SECRET_KEY!, (err: any, user: any) => {
            //       if (err) return res.status(403).json({ message: 'Forbidden' });
            //       next();
            // })
            req.user = user as User
            console.log(user)
            console.log(token)
            next()
      } catch (error) {
            res.status(400).send({
                  status: 'error',
                  msg: error
            })
      }
}

//PAKAI INI KALAU ADMIN MAU AKSES SELURUH PEMBELI KETIKA GET ID USER

export const checkRole = (req: Request, res: Response, next: NextFunction) => {
      try {
            if (req.user?.role !== 'eventorganizer') throw "Event Organizer only"
            next()
      } catch (error) {
            res.status(400).send({
                  status: 'error',
                  msg: error
            })
      }
}