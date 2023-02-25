import { Task } from "./Task";
import { increaseIdBy1 } from "./utility";

export const Mock_ToDo = [
    new Task({
        id: increaseIdBy1(),
        todo: 'Eat',
        status: "Active"
    }),
    new Task({
        id: increaseIdBy1(),
        todo: 'Sleep',
        status: "Active"
    }),
    new Task({
        id: increaseIdBy1(),
        todo: 'Repeat',
        status: "Active"
    })
]