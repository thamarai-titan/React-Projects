import { useRecoilValue,useSetRecoilState } from "recoil";
import { taskListAtoms } from "../store/atoms";

export default function DisplayTasks() {
  const taskList = useRecoilValue(taskListAtoms);
  const setTaskListAtom = useSetRecoilState(taskListAtoms);

  const deleteTask = (index) => {
    setTaskListAtom((oldList) => oldList.filter((_, i) => i !== index));
  };

  return (
    <>
      <div>
        <ul className="w-96 m-12 rounded-md bg-gray-300 ml-auto mr-auto">
          {taskList.map((task, index) => (
            <li
              key={index}
              className="p-5 flex flex-row justify-between items-center gap-x-2"
            >
              <span className="truncate w-3/4">{task}</span>
              <button className="bg-blue-400 p-2 flex-shrink-0 rounded-md" onClick={()=>deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
