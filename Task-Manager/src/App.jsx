import AddTask from "./components/AddTask";
import DisplayTasks from "./components/DisplayTasks";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <>
      <RecoilRoot>
        <AddTask />
        <DisplayTasks/>
      </RecoilRoot>
    </>
  );
}
