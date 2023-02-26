import { Task } from "./Task";
import { create } from 'zustand'
import { Mock_ToDo } from "./MockToDo";
// let id = 0;
// let called = false
// export function increaseIdBy1() {
//     if (!called) {
//         called = true
//         return 0
//     } else if (called) {
//         id++
//         return id
//     }
// }

export function activeTasks(unfiltered: Task[]) {

    return unfiltered.filter(task => task.status === "Active")
}
export function completedTasks(unfiltered: Task[]) {

    return unfiltered.filter(task => task.status === "Completed")
}

interface ToDoStore {
    toDos: Task[];
    active: Task[];
    completed: Task[];
    status: "All";
    isActive: boolean;
    setIsActive: (val: boolean) => void;
    isCompleted: boolean;
    setIsCompleted: (val: boolean) => void;
    setToDos: (newTodos: Task[]) => void;
    filterActiveToDos: (newTodos: Task[]) => void;
    filterCompletedToDos: (newTodos: Task[]) => void;
}
export const useStore = create<ToDoStore>((set) => ({
    toDos: Mock_ToDo,
    active: [],
    completed: [],
    status: "All",
    isActive: false,
    setIsActive: (val: boolean) => set((state: ToDoStore) => ({ ...state, isActive: val })),
    isCompleted: false,
    setIsCompleted: (val: boolean) => set((state: ToDoStore) => ({ ...state, isCompleted: val })),
    setToDos: (newTodos: Task[]) => set((state: ToDoStore) => ({ ...state, toDos: newTodos })),
    filterActiveToDos: (newTodos: Task[]) =>
        set((state: ToDoStore) => ({ ...state, active: activeTasks(newTodos) })),
    filterCompletedToDos: (newTodos: Task[]) =>
        set((state: ToDoStore) => ({ ...state, completed: completedTasks(newTodos) })),
}));
