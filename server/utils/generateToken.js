import jwt from 'jsonwebtoken';

const generateToken = (res, id) => { // Note the arguments order: res, id
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    });
}

export default generateToken;
