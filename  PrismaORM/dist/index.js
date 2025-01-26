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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
// similar to import {mongoose} from mongoose 
const client = new client_1.PrismaClient(); // generates instance of prisma client class
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.users.create({
            data: {
                username: "yash",
                password: "yash123",
                age: 20,
                city: "Faridabad"
            }
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
                username: true
            }
        });
        console.log(user === null || user === void 0 ? void 0 : user.username);
    });
}
function deleteUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.users.delete({
            where: {
                id: 1
            }
        });
    });
}
function updateUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.users.update({
            where: {
                id: 1
            },
            data: {
                username: "yashMakkar"
            }
        });
    });
}
function findUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.users.findFirst({
            where: {
                id: 1
            }
        });
    });
}
createUser();
findAndInfo();
