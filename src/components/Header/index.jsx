import todoLogo from '../../assets/Logo.png'
import styles from './header.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai';
export function Header(){
    return(
        <header className={styles.header}>
           <img src={todoLogo} alt="Logo" />
           <form className={styles.newTaskForm}>
            <input type="text" placeholder='Add a new task'/>
            <button>Create
                <AiOutlinePlusCircle size={20}/>
            </button>
           </form>
        </header>
    )
}