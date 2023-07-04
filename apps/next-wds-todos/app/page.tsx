import styles from './page.module.scss';
import { findTodos } from '../services/todos';

export default async function Index() {
  const todos = await findTodos();

  return (
    <main>
      <h1 className={styles.title}>Welcome to next-wds-todos!</h1>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </main>
  );
}
