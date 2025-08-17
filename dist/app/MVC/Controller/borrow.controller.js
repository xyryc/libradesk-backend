"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_model_1 = require("../Model/book.model");
const borrow_model_1 = require("../Model/borrow.model");
exports.borrowRoutes = express_1.default.Router();
exports.borrowRoutes.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parseBody = req.body;
        const book = yield book_model_1.Book.findById(parseBody.book);
        //   if (!book) {
        //     res.status(404).json({
        //       message: "Book Not Found!",
        //     });
        //   }
        if ((book === null || book === void 0 ? void 0 : book.copies) && book.copies >= parseBody.quantity) {
            book.copies -= parseBody.quantity;
            yield book.save();
        }
        console.log(book);
        //   Borrow Posted Routes 
        const borrowData = yield new borrow_model_1.Borrow(parseBody);
        yield borrowData.save();
        res.status(201).json({
            sucess: true,
            message: "Book Borrowed Sucessfully",
            borrowData: borrowData,
        });
    }
    catch (error) {
        res.status(400).json({ message: "Validation Failed", error: error.errors });
    }
}));
// Borrow aggregations Pipelines Opearations 
// borrow Routes thake post korbe jokhon boi kina hoye jabe tokhon summary Get routes giye kon boi kinlo koyta Quentity eigula table onujayi dakhabe 
exports.borrowRoutes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const summary = yield borrow_model_1.Borrow.aggregate([
        {
            $group: {
                _id: "$book",
                totalQuantity: {
                    $sum: "$quantity"
                }
            }
        },
        {
            $lookup: {
                from: "books",
                localField: "_id",
                foreignField: "_id",
                as: "book"
            }
        },
        {
            $unwind: "$book"
        },
        {
            $project: {
                title: "$book.title",
                isbn: "$book.isbn",
                totalQuantity: 1
            }
        }
    ]);
    res.json(summary);
}));
