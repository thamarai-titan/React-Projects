import { useRecoilValue } from "recoil"
import { taskListAtoms } from "../store/atoms"

export default function DisplayTasks(){

    const taskList = useRecoilValue(taskListAtoms)
    return <>
    
    <div>
    <ul>
        {
            taskList.map((taskList,index)=>(
                <li key={index}>{taskList}
                <button>Done or Not</button>
                </li>
                
            ))
            
        }
    </ul>
    </div>
    
    </>
}