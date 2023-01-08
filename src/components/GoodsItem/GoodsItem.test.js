import {render} from "@testing-library/react";
import {GoodsItem} from "./GoodsItem";


const testFavoritesArr = [1, 2, 3];
jest.mock("../../services/LocalStorage/LocalStorage", () => ({
    favorites: testFavoritesArr,
    remove: jest.fn(),
    add: jest.fn()
}));

describe("Testing GoodsItem.js", () => {
    test("testing fav-btn", () => {
        const setFavoritesArrMock = jest.fn();
        const {getByTestId} = render(<GoodsItem
            honey={{}}
            isInFavorite={false}
            setFavoritesArr={setFavoritesArrMock}
        />);
        const favBtn = getByTestId("fav-btn");
        expect(setFavoritesArrMock).not.toHaveBeenCalled();
        favBtn.click();
        expect(setFavoritesArrMock).toHaveBeenCalledTimes(1);
        expect(setFavoritesArrMock).toBeCalledWith([...testFavoritesArr]);
    })

    test("testing cart-btn", () => {
        const setModalVisibleMock = jest.fn();
        const setModalHeaderMock = jest.fn();
        const setModalIdMock = jest.fn();
        const testId = 5;
        const {getByTestId} = render(<GoodsItem
                honey={{id: testId}}
                isInCart={false}
                setModalHeader={setModalHeaderMock}
                setModalId={setModalIdMock}
                setModalVisible={setModalVisibleMock}
            />
        )
        const cartBtn = getByTestId("cart-btn");
        expect(setModalVisibleMock).not.toHaveBeenCalled();
        expect(setModalHeaderMock).not.toHaveBeenCalled();
        expect(setModalIdMock).not.toHaveBeenCalled();
        cartBtn.click();
        expect(setModalVisibleMock).toHaveBeenCalledTimes(1);
        expect(setModalHeaderMock).toHaveBeenCalledTimes(1);
        expect(setModalIdMock).toHaveBeenCalledTimes(1);
        expect(setModalVisibleMock).toHaveBeenCalledWith(true);
        expect(setModalIdMock).toHaveBeenCalledWith(testId);
    })
})