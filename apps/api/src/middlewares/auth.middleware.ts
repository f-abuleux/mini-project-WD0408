import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

//PAKAI INI KALAU ADMIN MAU AKSES SELURUH PEMBELI KETIKA GET IDUSER
//CHECKOUT HARUS VERIFIKASI TOKEN

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
      try {
            let token = req.headers.authorization?.replace("Bearer ", "")
            if (!token) throw 'Token not found'

            const user = verify(token, process.env.SECRET_KEY!)
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

export const checkRole = (req: Request, res: Response, next : NextFunction) => {
      try {
            if (req.user?.role !== 'eventorganizer') throw "Event Organizer only"
      } catch (error) {
            res.status(400).send({
                  status: 'error',
                  msg: error
            })
      
      }
}