import { useEffect, useState } from "react";
import {
  useLazyGetUserReposQuery,
  useSearchUsersQuery,
} from "../store/github/github.api";
import { useDebounce } from "../hooks/debounce";
import RepoCard from "../components/RepoCard";

function HomePage() {
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    // запрос не осуществляется покуда длина менее 3
    skip: debounced.length < 3,
  });
  const [
    fetchRepos,
    { isLoading: areReposLoading, isError: areReposError, data: reposData },
  ] = useLazyGetUserReposQuery();

  useEffect(() => {
    setDropdown(debounced.length > 3 && data?.length! > 0);
  }, [debounced, data]);

  function handleClick(username: string) {
    fetchRepos(username);
    setDropdown(false);
  }

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && (
        <p className="text-center text-red-700">Something went wrong</p>
      )}
      <div className="relative w-[560px]">
        <input
          value={search}
          type="text"
          className="border py-2 px-4 h-[42px] w-full"
          placeholder="Search for guthub username"
          onChange={(e) => setSearch(e.target.value)}
        />
        {dropdown && (
          <ul className="list-none absolute top-[72px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
            {isLoading && <p className="items-center">Loading...</p>}
            {data?.map((user) => {
              return (
                <li
                  onClick={() => handleClick(user.login)}
                  key={user.id}
                  className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
                >
                  {user.login}
                </li>
              );
            })}
          </ul>
        )}
        <div className="container">
          {areReposLoading && <p className="text-center mt-30">Loading...</p>}
          {reposData?.map((repo) => {
            return <RepoCard key={repo.id} repo={repo}></RepoCard>;
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
