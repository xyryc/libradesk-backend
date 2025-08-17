import express, { Request, Response } from "express";
import { z } from "zod";
import { Book } from "../Model/book.model";

export const bookRoutes = express.Router();

const createBookSchema = z.object({
  title: z.string().min(1, "Title is must be Required!"),
  author: z.string().min(1, "Must be granted excase 1 charcter"),
  genre: z.string().min(1, "Must be getter then one charcter"),
  isbn: z.string().min(1, "Must be need one charcter"),
  description: z.string().optional(),
  copies: z.number().int().nonnegative("Copies must be 0 or more"),
  available: z.boolean().optional(),
});

export type IBookZod = z.infer<typeof createBookSchema>;

bookRoutes.post("/", async (req, res) => {
  try {
    const bodyParse = await createBookSchema.parseAsync(req.body);

    const bookData = new Book(bodyParse);
    await bookData.save();
    console.log(bookData);

    res.status(201).json({
      sucess: true,
      message: "Book Posted Created sucessfully!",
      bookData: bookData,
    });
  } catch (error: any) {
    res.status(400).json({
      sucess: false,
      message: "validation Failed",
      error: error,
    });
  }
});

// Get ALl Books
bookRoutes.get("/", async (req, res) => {
  try {
    const result = await Book.find();

    res.status(200).json({
      sucess: true,
      message: "All Book Fetch SucessFully!",
      result: result,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: "Fail To Fetch",
      error: error,
    });
  }
});

// Spesific Book Api using Unique id
bookRoutes.get("/:bookId", async (req, res) => {
  try {
    const id = req.params.bookId;
    const result = await Book.findOne({ _id: id });

    res.status(200).json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.status(404).json({
      sucess: false,
      message: " Failed To Book Fetch",
      error: error,
    });
  }
});

// Spesific Book Update {APIS}
bookRoutes.put("/:bookId", async (req, res) => {
  try {
    const id = req.params.bookId;
    const body = await createBookSchema.parseAsync(req.body);
    const result = await Book.findByIdAndUpdate(id, body, {
      upsert: true,
      new: true,
    });

    res.status(200).json({
      sucess: true,
      message: "Book Data Updated Sucessfully",
      result: result,
    });
  } catch (error) {
    res.status(401).json({
      sucess: false,
      message: "No Data Found",
      error: error,
    });
  }
});

// Single Book Deleted API
bookRoutes.delete("/:bookId", async (req, res) => {
  const id = req.params.bookId;
  const result = await Book.deleteOne({ _id: id });

  res.status(200).json({
    sucess: true,
    messgae: "Book Deleted Sucessfully!",
    result: result,
  });

  if (!result) {
    res.status(404).json({
      sucess: false,
      message: "Deleted Failed",
    });
  }
});

// Done APIS
