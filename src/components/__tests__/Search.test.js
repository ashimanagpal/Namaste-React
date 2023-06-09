import {render} from "@testing-library/react";
import Body from "../Body"
import { Provider } from "react-redux";
import store from "../../utils/Store";
import { StaticRouter } from "react-router-dom/server";
import {RESTAURANT_DATA} from "../../mocks/data"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESTAURANT_DATA)}
    });
});



test("s on home page", () => {
    const body = render(
    <StaticRouter>
        <Provider store={store}>
            <Body />
        </Provider>
    </StaticRouter>
    );

    const searchBtn = body.getByTestId("search-btn");

    console.log(searchBtn);
});