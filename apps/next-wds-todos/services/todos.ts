import { prisma } from '../repositories/local-db';

type TodoInput = {
  title: string;
  isCompleted: boolean;
};

export const findTodos = async () => {
  return prisma.todo.findMany();
};

export const createNewTodo = async (objTodo: TodoInput) => {
  return prisma.todo.create({
    data: objTodo,
  });
};

export const updateTodoIsCompleted = async (
  id: string,
  isCompleted: boolean
) => {
  return prisma.todo.update({
    where: { id },
    data: {
      isCompleted,
    },
  });
};
