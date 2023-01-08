import {render, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Checkout} from "./Checkout";


describe("Testing Checkout.js", () => {
    test("Checkout submit btn calls clearing cart", async () => {
        const testUserData = {
            name: "userName",
            surname: "userSurname",
            age: "100",
            address: "userAddress",
            tel: "userTel"
        };
        const clearCartMock = jest.fn();
        const {getByTestId} = render(<Checkout cartedItems={[]} clearCart={clearCartMock}/>);
        const submitBtn = getByTestId("checkout-submit-btn");
        for (const testUserDataKey in testUserData) {
            userEvent.type(getByTestId(`input-${testUserDataKey}`), testUserData[testUserDataKey]);
        }
        submitBtn.click();
        await waitFor(() => expect(clearCartMock).toHaveBeenCalledTimes(1));
    })
})