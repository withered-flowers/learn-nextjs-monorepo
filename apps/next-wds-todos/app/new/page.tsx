import { redirect } from 'next/navigation';
import { createNewTodo } from '../../services/todos';
import Link from 'next/link';

const serverSideFormOnSubmitHandler = async (data: FormData) => {
  'use server';

  // This is server side
  const formTitleData = data.get('title')?.valueOf();

  if (typeof formTitleData !== 'string' || formTitleData.length === 0) {
    // If error is happening, just throw error
    throw new Error('Invalid Title or Title is required');
  }

  await createNewTodo({
    title: formTitleData,
    isCompleted: false,
  });

  // When it's all done, we only need to redirect to the home page
  redirect('/');
};

const NewTodo = () => {
  return (
    <main>
      <header className="mb-4 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">New Todo</h1>
        <Link
          className="rounded border border-blue-400 px-2 py-1 outline-none transition-colors duration-300 focus-within:bg-sky-700 focus-within:text-white hover:bg-sky-700 hover:text-white"
          href="/"
        >
          Home
        </Link>
      </header>

      <section>
        <form
          className="flex flex-col gap-4"
          action={serverSideFormOnSubmitHandler}
        >
          <input
            type="text"
            name="title"
            id="title"
            className="rounded border border-slate-300 bg-transparent px-2 py-1 outline-none focus-within:border-slate-500"
          />

          <div className="flex flex-row items-center justify-end gap-2">
            <Link
              className="rounded border border-blue-400 px-2 py-2 outline-none transition-colors duration-300 focus-within:bg-sky-700 focus-within:text-white hover:bg-sky-700 hover:text-white"
              href=".."
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="rounded border border-blue-400 px-2 py-2 outline-none transition-colors duration-300 focus-within:bg-sky-700 focus-within:text-white hover:bg-sky-700 hover:text-white"
            >
              Create
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default NewTodo;
