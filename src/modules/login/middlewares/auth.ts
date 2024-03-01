import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

interface AuthenticatedRequest extends Request {
    user?: string; 
}

const authenticateUser = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const tokenHeader = req.header('Authorization');

    if (!tokenHeader) {
        return res.status(401).json({ message: 'Acesso não autorizado.' });
    }

    const token = tokenHeader.replace('Bearer ', '');

    try {
        const decoded: any = jwt.verify(token, 'Ch4v3M1xTa');
        req.user = decoded.user;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido' });
    }
};

export { authenticateUser };
