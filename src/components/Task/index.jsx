import styles from './task.module.css'
// import { CgTrash } from 'react-icons/ai';

export function Task({task}){
    console.log(task)
    return(
        <>
      {task.map((item)=>(<div key={item.id} className={styles.task}>

            <button className={styles.checkContainer}>
<div />
            </button>
            <p>{item.title}

            </p>
            <button className={styles.deleteButton}>Delete
                {/* <BCgTrash size={20} /> */}
            </button>
        </div>)
        )  } 
        </>
    )
}