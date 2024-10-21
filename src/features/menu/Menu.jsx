import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../serveses/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  //it automatically load data as you get to this rout
 const menu =  useLoaderData()  

  return <ul>
     {menu.map(pizza=><MenuItem pizza = {pizza} key = {pizza.id}/>)}
  </ul>
}

export function loader(){
const menu = getMenu()
return menu
}

export default Menu;
