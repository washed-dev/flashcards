import { Link } from "react-router-dom";
import data from "../data.json";
import { ReactNode } from "react";
function Dashboard() {
  return (
    <div>
      {data.map(
        (e, i): ReactNode => (
          <Link to={"/flashcards/" + i}>
            <div className="deck-selection">{data[i].id}</div>
          </Link>
        )
      )}
    </div>
  );
}

export default Dashboard;
