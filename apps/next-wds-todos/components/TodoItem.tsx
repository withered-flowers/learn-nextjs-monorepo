'use client';

type Props = {
  id: string;
  title: string;
  isCompleted: boolean;
  // Since this is gonna be a server side, we need to make sure it's passed down
  // from server component (parent)
  toggleTodo: (id: string, isCompleted: boolean) => void;
};

const TodoItem = ({ id, title, isCompleted, toggleTodo }: Props) => {
  return (
    <li className="flex items-center gap-1">
      <input
        id={id}
        type="checkbox"
        className="peer cursor-pointer"
        defaultChecked={isCompleted}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:text-slate-300 peer-checked:line-through"
      >
        {title}
      </label>
    </li>
  );
};

export default TodoItem;
