import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLoyout() {
  ////it access to a state that is changing
  const navigate = useNavigation()
  const isLoading = navigate.state === 'loading'
  
  return (
    <div className="layout">
      <Header />
      {isLoading && <Loader/>}
      <p>Azizi</p>

      <main>
        <Outlet/>
      </main>
        <CartOverview />
    </div>
  );
}
export default AppLoyout;
