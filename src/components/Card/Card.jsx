import "./Card.scss";
import { data } from "../../helper/data";
import Kart from "./Kart";

const Card = () => {
  console.log(data);

  return (
    <div className="main">
      {data.map((item) => {
        return (
          <Kart {...item}/>          
        );
      })}
    </div>
  );
};

export default Card;
