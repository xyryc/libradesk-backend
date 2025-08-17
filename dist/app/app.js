"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import { config } from "dotenv";
const index_1 = __importDefault(require("./config/index"));
const book_controller_1 = require("./MVC/Controller/book.controller");
const borrow_controller_1 = require("./MVC/Controller/borrow.controller");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Children Routes Managements systerms 
app.use('/book', book_controller_1.bookRoutes);
// Borrows Routes Managements Systerms 
app.use("/borrow", borrow_controller_1.borrowRoutes);
app.get("/", (req, res) => {
    res.send("Libary Management Systerms");
});
app.listen(index_1.default.port, () => {
    console.log(`Server On the Port: ${index_1.default.port}`);
});
exports.default = app;
