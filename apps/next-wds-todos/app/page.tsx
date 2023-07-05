import Link from 'next/link';
import { findTodos, updateTodoIsCompleted } from '../services/todos';
import TodoItem from '../components/TodoItem';

const serverSideToggleTodo = async (id: string, isCompleted: boolean) => {
  'use server';

  // This is server side
  await updateTodoIsCompleted(id, isCompleted);
};

export default async function Index() {
  const todos = await findTodos();

  return (
    <main>
      <header className="mb-4 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Todos</h1>
        <Link
          className="rounded border border-blue-400 px-2 py-1 outline-none transition-colors duration-300 focus-within:bg-sky-700 focus-within:text-white hover:bg-sky-700 hover:text-white"
          href="/new"
        >
          New
        </Link>
      </header>

      <section>
        <ul className="pl-4">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={serverSideToggleTodo}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
