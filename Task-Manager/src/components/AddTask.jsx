import { useRecoilState, useSetRecoilState } from "recoil";
import { taskAtoms, taskListAtoms } from "../store/atoms";

export default function AddTask() {
  const [taskAtom, setTaskAtom] = useRecoilState(taskAtoms);
  const setTaskListAtom = useSetRecoilState(taskListAtoms);

  const handleChange = (event) => {
    setTaskAtom(event.target.value);
  };
  function addTasks() {
    if (taskAtom.trim() != "") {
      setTaskListAtom((oldList) => [...oldList, taskAtom]);
      setTaskAtom("");
    }
  }
  return (
    <>
      <div className="w-96 m-12 pb-12 rounded-md bg-gray-300 ml-auto mr-auto flex flex-col items-center">
        <div className="pt-12 pb-6">
          <label htmlFor="task" className="">
            Enter the task{" "}
          </label>
        </div>

        <div className="pb-6">
          <input
            type="text"
            placeholder="Enter the task"
            onChange={handleChange}
            value={taskAtom}
            className="w-64 h-9 pl-2 border-gray-400 border-3"
          />
        </div>
        <div className="">
          <button onClick={addTasks} className="bg-white pl-6 pr-6 m-4 h-10 rounded-sm hover:bg-gray-300 border-black hover:border-2">
            Add Task
          </button>
        </div>
      </div>
    </>
  );
}
