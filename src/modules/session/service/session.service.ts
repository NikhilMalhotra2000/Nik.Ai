import { NextFunction, Request, Response } from "express";

class SessionService {
    private static instance: SessionService;

    constructor() {
        if (SessionService.instance) {
            return SessionService.instance;
        }
        SessionService.instance = this;
    }

    regenerateSession(req: Request): Promise<any> {
        return new Promise((resolve, reject)=> {
            req.session.regenerate((err) => {
                if (err) return reject(err);
                if(req.session.metaData === undefined) req.session.metaData = {};
                req.session.metaData["ip"] = req.ip || "";
                req.session.save((err)=> {
                    if(err) return reject(err);

                    resolve(req.session);
                })
            });
        });
    }

    destroySession(req: Request): Promise<void> {
        return new Promise((resolve, reject)=>{
            req.session.destroy((err) => {
                if (err) return reject(err);
                resolve();
            });
        });
    }
}

export default new SessionService();
