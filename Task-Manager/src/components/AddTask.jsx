import { useRecoilState, useSetRecoilState } from "recoil";
import { taskAtoms } from "../store/atoms";

export default function AddTask() {
  const [taskAtom, setTaskAtom] = useRecoilState(taskAtoms);

    const handleChange = (event) => {
        setTaskAtom(event.target.value)
        
    }

  return (
    <>
      <label htmlFor="task">Enter the task</label>
      <input
        type="text"
        placeholder="Enter the task"
        onChange={handleChange}
        value={taskAtom}
      />
      <button>Add Task</button>
    </>
  );
}
