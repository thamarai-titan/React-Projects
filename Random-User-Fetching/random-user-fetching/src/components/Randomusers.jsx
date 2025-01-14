import axios from "axios";
import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { userAtoms, pageAtoms } from "../store/atom";

const Randomusers = () => {
  const [userAtom, setUserAtom] = useRecoilState(userAtoms);
  const [pageAtom, setPageAtom] = useRecoilState(pageAtoms);

  useEffect(() => {
    const fetchingUsers = async () => {
      try {
        const response = await axios.get(
          `https://randomuser.me/api/?page=${pageAtom}&results=5`
        );
        setUserAtom((prevusers) => [...prevusers, ...response.data.results]);
        console.log(response.data.results)
      } catch {
        console.error("Error while fetching the users", error);
      }
    };
    fetchingUsers();
  }, [pageAtom]);

  const LoadMoreUsers = () => {
    setPageAtom((prevpage) => prevpage + 1);
  };

  return (
    <>
      <div>
        <div className="flex justify-center items-center min-h-screen bg-gray-200">
          <div className="w-3/4 max-w-5xl bg-slate-400 p-6 rounded-lg flex flex-wrap gap-4 justify-center">
            {userAtom.map((user, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-auto h-auto bg-slate-100 p-4 rounded-lg shadow-md"
              >
                <img
                  src={user.picture.medium}
                  alt={`${user.name.first} ${user.name.last}`}
                  className="w-16 h-16 rounded-full"
                />
                <h2 className="mt-4 text-lg font-semibold">
                  {user.name.first}
                  
                </h2>
                <h2 className="mt-4 text-lg font-semibold">
                  {user.dob.age}
                  
                </h2>
                <h4 className="mt-4 text-lg font-semibold">
                  {user.phone}
                </h4>
                <h4 className="mt-4 text-lg font-semibold">
                  {user.dob.date}
                </h4>
              </div>
            ))}
            <div className="w-full flex justify-center mt-4">
              <button
                onClick={LoadMoreUsers}
                className="text-white underline hover:text-blue-700"
              >
                Load More Users
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Randomusers;
