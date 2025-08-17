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
exports.bookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
const book_model_1 = require("../Model/book.model");
exports.bookRoutes = express_1.default.Router();
const createBookSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is must be Required!"),
    author: zod_1.z.string().min(1, "Must be granted excase 1 charcter"),
    genre: zod_1.z.string().min(1, "Must be getter then one charcter"),
    isbn: zod_1.z.string().min(1, "Must be need one charcter"),
    description: zod_1.z.string().optional(),
    copies: zod_1.z.number().int().nonnegative("Copies must be 0 or more"),
    available: zod_1.z.boolean().optional(),
});
exports.bookRoutes.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bodyParse = yield createBookSchema.parseAsync(req.body);
        const bookData = new book_model_1.Book(bodyParse);
        yield bookData.save();
        console.log(bookData);
        res.status(201).json({
            sucess: true,
            message: "Book Posted Created sucessfully!",
            bookData: bookData,
        });
    }
    catch (error) {
        res.status(400).json({
            sucess: false,
            message: "validation Failed",
            error: error,
        });
    }
}));
// Get ALl Books
exports.bookRoutes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_model_1.Book.find();
        res.status(200).json({
            sucess: true,
            message: "All Book Fetch SucessFully!",
            result: result,
        });
    }
    catch (error) {
        res.status(500).json({
            sucess: false,
            message: "Fail To Fetch",
            error: error,
        });
    }
}));
// Spesific Book Api using Unique id
exports.bookRoutes.get("/:bookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.bookId;
        const result = yield book_model_1.Book.findOne({ _id: id });
        res.status(200).json({
            success: true,
            result: result,
        });
    }
    catch (error) {
        res.status(404).json({
            sucess: false,
            message: " Failed To Book Fetch",
            error: error
        });
    }
}));
// Spesific Book Update {APIS}
exports.bookRoutes.put("/:bookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.bookId;
        const body = yield createBookSchema.parseAsync(req.body);
        const result = yield book_model_1.Book.findByIdAndUpdate(id, body, { upsert: true, new: true });
        res.status(200).json({
            sucess: true,
            message: "Book Data Updated Sucessfully",
            result: result,
        });
    }
    catch (error) {
        res.status(401).json({
            sucess: false,
            message: "No Data Found",
            error: error,
        });
    }
}));
// Single Book Deleted API
exports.bookRoutes.delete("/:bookId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.bookId;
    const result = yield book_model_1.Book.deleteOne({ _id: id });
    res.status(200).json({
        sucess: true,
        messgae: "Book Deleted Sucessfully!",
        result: result
    });
    if (!result) {
        res.status(404).json({
            sucess: false,
            message: "Deleted Failed",
        });
    }
}));
// Done APIS
