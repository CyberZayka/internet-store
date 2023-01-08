import {render} from "@testing-library/react";
import {GoodsList} from "./GoodsList";


jest.mock("../GoodsItem/GoodsItem", () => () => <div>GoodsItem mock</div>);

describe("Testing GoodsList.js", () => {
    test("testing cart-decline-btn", () => {
        const setModalVisibleMock = jest.fn();
        const {getByTestId} = render(<GoodsList
            honeyArr={[]}
            cartedArr={[]}
            modalVisible={true}
            modalHeader="testHeader"
            setModalVisible={setModalVisibleMock}
        />);
        const cartDeclineBtn = getByTestId("cart-decline-btn");
        expect(setModalVisibleMock).not.toHaveBeenCalled();
        cartDeclineBtn.click();
        expect(setModalVisibleMock).toHaveBeenCalledTimes(1);
        expect(setModalVisibleMock).toHaveBeenCalledWith(false);
    })

    test("testing cart-confirm-btn", () => {
        const setCartedArrMock = jest.fn();
        const setModalVisibleMock = jest.fn();
        const {getByTestId} = render(<GoodsList
            honeyArr={[]}
            cartedArr={[]}
            modalVisible={true}
            modalHeader="testHeader"
            isInCart={false}
            setCartedArr={setCartedArrMock}
            setModalVisible={setModalVisibleMock}
        />);
        const cartConfirmBtn = getByTestId("cart-confirm-btn");
        expect(setCartedArrMock).not.toHaveBeenCalled();
        expect(setModalVisibleMock).not.toHaveBeenCalled();
        cartConfirmBtn.click();
        expect(setCartedArrMock).toHaveBeenCalledTimes(1);
        expect(setModalVisibleMock).toHaveBeenCalledTimes(1);
        expect(setModalVisibleMock).toHaveBeenCalledWith(false);
    })
})