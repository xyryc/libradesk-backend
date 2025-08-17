import mongoose, { Schema } from "mongoose";
import { IBook } from "../../Interface/book.interface";

const BookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    genre: {
      type: String,
      required: true,
      trim: true,
    },
    isbn: {
      type: String,
      required: true,

      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    copies: {
      type: Number,
      required: true,
    },

    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Book = mongoose.model<IBook>("Book", BookSchema);
