import Modal from "./Modal";
import {render} from "@testing-library/react";


describe("Testing Modal.js", () => {
    test("smoke test", () => {
        render(<Modal
            header="header"
            text="text"
            actions={<div>actions</div>}
            closeHandler={jest.fn()}
        />)
    })

    test("modal shows filling from props", () => {
        const {getByText} = render(<Modal
            header="header"
            text="text"
            actions={<div>actions</div>}
            closeHandler={jest.fn()}
        />);
        getByText("header");
        getByText("text");
        getByText("actions");
    })

    test("closeHandler is called when modal overlay clicked", () => {
        const closeHandlerMock = jest.fn();
        const {getByTestId} = render(<Modal
            header="header"
            text="text"
            actions={<div>actions</div>}
            closeHandler={closeHandlerMock}
        />);
        const modalOverlay = getByTestId("modal-overlay");
        expect(closeHandlerMock).not.toHaveBeenCalled();
        modalOverlay.click();
        expect(closeHandlerMock).toHaveBeenCalledTimes(1);
    })
})