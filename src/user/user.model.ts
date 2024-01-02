import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  surname: { type: String, required: true },
});

// export interface User extends Document {
//   name: string;
//   age: number;
//   surname: string;
// }

export interface User {
  name: string;
  surname: string;
  age: String;
}
