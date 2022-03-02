// Project interface
export interface IProject {
    name: string;
    description?: string;
    goal?: string;
    status?: boolean;
    timestamps: Date;
    tasks?: Tasks;
    id: string;
}

type Tasks = ITask[];

// Task interface
export interface ITask{
    taskName: string;
    timestamps: Date;
    urgency: number;
    procedure?: number;
    comments?: Comments;
}

type Comments = IComment[];

// Comment interface
export interface IComment{
    comment: string;
    timestamps: Date;
}

// Task form interface
export interface TaskFormInterface {
    task: ITask;
    handleTaskCreate: (task: ITask) => void;
}

// Task list interface
export interface TaskListInterface {
    handleTaskUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleTaskRemove: (id: string) => void;
    handleTaskComplete: (id: string) => void;
    task: ITask;
}