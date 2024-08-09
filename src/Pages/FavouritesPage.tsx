import { useAppSelector } from "../hooks/redux";

function FavouritesPage() {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0) {
    return <p>There's no items</p>;
  } else {
    return (
      <div className="flex justify-center pt-10 mx-auto h-screen w-screen gap-3">
        <ul className="list-decimal font-bold text-[20px]">
          {favourites.map((item) => {
            return (
              <li key={item}>
                <a href={item} target="_blank" className="no-underline text-black font-normal">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FavouritesPage;
