import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
    if(!process.env.JWT_KEY){
      throw new Error('Variable JWT_KEY debe estar definida');
    }


    try {
      await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      });
      console.log('Connected to MongoDb');
    } catch (err) {
      console.error(err);
    }
  
    app.listen(3000, () => {
      console.log('Listening on port 3000!!!!!!!!');
    });
  };
  
start();
  