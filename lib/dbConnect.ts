import mongoose, { Connection } from 'mongoose';

const MONGODB_URI = "mongodb+srv://Eatsumn:Eatsumn@cluster0.glsj1ah.mongodb.net/sabrina-project?appName=Cluster0";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable.");
}

const cached: { conn: Connection | null; promise: Promise<Connection> | null } = {
  conn: null,
  promise: null,
};

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      console.log("Connected to MongoDB");
      return mongoose.connection;
    });
  }
  
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
