import { Task } from "./Task";

let id = 0;
let called = false
export function increaseIdBy1() {
    if (!called) {
        called = true
        return 0
    } else if (called) {
        id++
        return id
    }
}

export function activeTasks(unfiltered: Task[]) {

    return unfiltered.filter(task => task.status === "Active")
}
export function completedTasks(unfiltered: Task[]) {

    return unfiltered.filter(task => task.status === "Completed")
}