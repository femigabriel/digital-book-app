// models/User.ts
import mongoose, { Schema, model, models, Document } from "mongoose";

// Define the type for a score
interface Score {
  activityName: string;
  score: number;
}

// Define the type for a User document
interface UserDocument extends Document {
  avatar: string;
  name: string;
  email: string;
  scores: Score[]; // Add scores to the User document
}

const UserSchema = new Schema<UserDocument>({
  avatar: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  scores: [
    {
      activityName: { type: String, required: true },
      score: { type: Number, required: true },
    },
  ],
});

if (models.User) {
  delete models.User; // Clear cached model
}

const User = model<UserDocument>("User", UserSchema);
export default User;





// import mongoose, { Schema, model, models } from "mongoose";

// const UserSchema = new Schema({
//   avatar: { type: String, required: true },  // Store avatar as filename
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
// });

// if (models.User) {
//   delete models.User; // Clear cached model
// }
// const User = model("User", UserSchema);
// export default User;
