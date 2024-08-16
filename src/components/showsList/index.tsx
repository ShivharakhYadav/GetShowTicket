import ShowCard from "./partials/showCard";
import { showsData } from "./consts";

const ShowsList = () => {
  return showsData.map((show) => <ShowCard key={show.id} {...show} />);
};

export default ShowsList;
