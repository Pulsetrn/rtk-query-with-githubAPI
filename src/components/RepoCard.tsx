import { IRepo } from "../modules/models";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { useState } from "react";

function RepoCard({ repo }: { repo: IRepo }) {
  const { addFavourite, removeFavourite } = useActions();
  const { favourites } = useAppSelector((state) => state.github);
  const [isFavourite, setIsFavourite] = useState(favourites.includes(repo.html_url));

  function addToFavourite(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    addFavourite(repo.html_url);
    setIsFavourite(true);
  }

  function removeFromFavourite(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    removeFavourite(repo.html_url);
    setIsFavourite(false);
  }

  return (
    <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a
        href={repo.html_url}
        target="_blank"
        className="no-underline text-black"
      >
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>
        {!isFavourite && <button
          className="py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all mr-2"
          onClick={addToFavourite}
        >
          Add to favourite
        </button>}

        {isFavourite && (
          <button
            className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
            onClick={removeFromFavourite}
          >
            Remove from favourite
          </button>
        )}
      </a>
    </div>
  );
}

export default RepoCard;
