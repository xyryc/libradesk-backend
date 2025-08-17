import express from "express";
import { Book } from "../Model/book.model";
import { Borrow } from "../Model/borrow.model";

export const borrowRoutes = express.Router();

borrowRoutes.post("/", async (req, res) => {
  try {
    const parseBody = req.body;

    const book = await Book.findById(parseBody.book);

    // console.log(book)

    //   if (!book) {
    //     res.status(404).json({
    //       message: "Book Not Found!",
    //     });
    //   }

    if (book?.copies && book.copies >= parseBody.quantity) {
      book.copies -= parseBody.quantity;
      await book.save();
    }
    // console.log(book)

    //   Borrow Posted Routes

    const borrowData = await new Borrow(parseBody);

    await borrowData.save();

    res.status(201).json({
      sucess: true,
      message: "Book Borrowed Sucessfully",
      borrowData: borrowData,
    });
  } catch (error: any) {
    res.status(400).json({ message: "Validation Failed", error: error.errors });
  }
});

// Borrow aggregations Pipelines Opearations

// borrow Routes thake post korbe jokhon boi kina hoye jabe tokhon summary Get routes giye kon boi kinlo koyta Quentity eigula table onujayi dakhabe
borrowRoutes.get("/", async (req, res) => {
  const summary = await Borrow.aggregate([
    {
      $group: {
        _id: "$book",
        totalQuantity: {
          $sum: "$quantity",
        },
      },
    },
    {
      $lookup: {
        from: "books",
        localField: "_id",
        foreignField: "_id",
        as: "book",
      },
    },
    {
      $unwind: "$book",
    },
    {
      $project: {
        title: "$book.title",
        isbn: "$book.isbn",
        totalQuantity: 1,
      },
    },
  ]);

  res.json(summary);
});
