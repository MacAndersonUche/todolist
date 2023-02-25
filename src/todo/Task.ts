export class Task {
    id: number | undefined;
    todo: string = "";
    status: string = Status.Active;

    constructor(initializer?: any) {
        if (initializer.id) this.id = initializer.id;
        if (initializer.status) this.status = initializer.status;
        if (initializer.todo) this.todo = initializer.todo;
    }
}

enum Status {
    Active = "Active",
    Completed = "Completed"
}