import {render} from "@testing-library/react";
import Header from "../Haeder";
import { Provider } from "react-redux";
import store from "../../utils/Store";
import {StaticRouter} from "react-router-dom/server"
 
test("Logo should be load on rendering header", () =>{
    //Load Header
    const header = render(
    <StaticRouter>
        <Provider store={store}>
            <Header/>
        </Provider> 
    </StaticRouter>
     );

     const Logo = header.getAllByTestId("Logo");

    console.log(Logo[0]);

    expect(Logo[0].src).toBe("http://localhost/dummy.png");
    
    //Check if logo is loaded


});

test("Cart should have 0 item", () =>{
    //Load Header
    const header = render(
    <StaticRouter>
        <Provider store={store}>
            <Header/>
        </Provider> 
    </StaticRouter>
     );

     const cart = header.getByTestId("cart");

    console.log(cart);

    expect(cart.innerHTML).toBe("0");
    
    //Check if logo is loaded


});