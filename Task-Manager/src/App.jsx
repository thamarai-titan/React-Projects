import AddTask from "./components/AddTask";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <>
      <RecoilRoot>
        <AddTask />
      </RecoilRoot>
    </>
  );
}
