import { prisma } from '../repositories/local-db';

type TodoInput = {
  title: string;
  isCompleted: boolean;
};

export const findTodos = async () => {
  return await prisma.todo.findMany();
};

export const createNewTodos = async (objTodo: TodoInput) => {
  return await prisma.todo.create({
    data: objTodo,
  });
};
