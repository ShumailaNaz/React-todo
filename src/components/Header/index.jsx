import todoLogo from "../../assets/Logo.png";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";
export function Header({ onAddTask }) {

  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    onAddTask(title);

    event.preventDefault();
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
 
    event.preventDefault();
  };

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logo" />
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          type="text"
          value={title}
          onChange={ onChangeTitle }
          placeholder="Add a new task"
        />
        <button>
          Create
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
