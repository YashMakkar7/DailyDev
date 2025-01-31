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
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
// similar to import {mongoose} from mongoose
const client = new client_1.PrismaClient({ log: ["query"] }); // generates instance of prisma client class
const app = (0, express_1.default)();
//@ts-ignore
client.$on("query", (e) => {
    //@ts-ignore
    console.log("Query:", e.query); // Logs the raw SQL query
});
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield client.users.findMany();
    res.json({
        users
    });
}));
app.get("/todos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield client.users.findFirst({
        where: {
            id: Number(id)
        },
        select: {
            todos: true
        }
    });
    res.json({ user });
}));
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.users.create({
            data: {
                username: "yash",
                password: "yash123",
                age: 20,
                city: "Faridabad",
            },
        });
    });
}
function findAndInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield client.users.findFirst({
            where: {
                id: 1,
            },
            select: {
                // only give username
                username: true,
            },
        });
        console.log(user === null || user === void 0 ? void 0 : user.username);
    });
}
function findAndTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield client.users.findFirst({
            where: {
                id: 1,
            },
            include: {
                todos: true,
            },
        });
        console.log(user);
    });
}
function deleteUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.users.delete({
            where: {
                id: 1,
            },
        });
    });
}
function updateUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.users.update({
            where: {
                id: 1,
            },
            data: {
                username: "yashMakkar",
            },
        });
    });
}
function findUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.users.findFirst({
            // find for all entry and findFirst for one entry
            where: {
                id: 1,
            },
        });
    });
}
findAndTodos();
app.listen(3000, () => {
    console.log("Server is running");
});
