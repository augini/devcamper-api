import mongoose from 'mongoose';

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.Mongo_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  });

  console.log(`Mongo DB connected ${conn.connection.host}`.blue.bold.italic);
};

export default connectDB;
