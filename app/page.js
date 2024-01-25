import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Featured from "./Components/Featured/Featured";
import CatagoryList from "./Components/CatagoryList/CatagoryList";
import CardList from "./Components/CardList/CardList";
import Menu from "./Components/Menu/Menu";
import '../app/globals.css'
config.autoAddCss = false;

export default function Home() {
  return (
    <>
     <Featured/>
     <CatagoryList/>
     <div className='content'>
      <CardList/>
      <Menu/>
     </div>
    </>
  );
}
