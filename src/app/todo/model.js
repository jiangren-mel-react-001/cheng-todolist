

export class TodoModel {
    constructor(name, done = false) {
        TodoModel.generaterId ++;
        this.id = TodoModel.generaterId;
        this.name = name;
        this.done = done;
    }
}

TodoModel.generaterId = 0;