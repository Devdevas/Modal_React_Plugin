## A React modal npm package

### Install

#### Using npm:

`$npm install @ousshmi/react-modal`

#### Using yarn:

`$yarn add @ousshmi/react-modal`

### Usage

##### In a React app, import and use the Modal components:

`import Modal from '@ousshmi/react-modal'`

#### Modal props

| Name             | Type     | Description                                                                |
| ---------------- | -------- | -------------------------------------------------------------------------- |
| show             | boolean  | Show/Hide the modal                                                        |
| onClose          | function | Use this function to set show value to 'false' and close the modal         |
| title            | string   | Customize the title of the modal                                           |
| message          | string   | Customize the message of the modal                                         |
| closeButton      | boolean  | Show/Hide the close button                                                 |
| closeIcon        | string   | A path to a close icon you want to use when 'closeButton = {false}'        |
| addNewButton     | boolean  | Show/Hide a new button, If 'true' a new button will be added               |
| newButtonText    | string   | When 'addNewButton={true}' you could customize the text of the new button  |
| onClickNewButton | function | Use this function to do whatever you want after clicking on the new button |

#### Modal style props

| Name               | Type   | Description                                                      |
| ------------------ | ------ | ---------------------------------------------------------------- |
| wrapperBackground  | string | A normal CSS values                                              |
| margin             | string | A normal CSS values                                              |
| width              | string | A normal CSS values                                              |
| maxWidth           | string | A normal CSS values                                              |
| border             | string | A normal CSS values                                              |
| borderRadius       | string | Customize CSS values and use (overFlow : "hidden") to see result |
| overflow           | string | A normal CSS values                                              |
| headerBackground   | string | A normal CSS values                                              |
| headerPadding      | string | A normal CSS values                                              |
| headerFont         | string | Everything about the font, example values: "bold 15px roboto"    |
| headertextColor    | string | A normal CSS values                                              |
| bodyBackground     | string | A normal CSS values                                              |
| bodyPadding        | string | A normal CSS values                                              |
| bodyFont           | string | Everything about the font, example values: "bold 15px roboto"    |
| bodytextColor      | string | A normal CSS values                                              |
| bodyBorderTop      | string | A normal CSS values                                              |
| bodyBorderBottom   | string | A normal CSS values                                              |
| footerPadding      | string | A normal CSS values                                              |
| footerBackground   | string | A normal CSS values                                              |
| buttonPadding      | string | A normal CSS values                                              |
| buttonBackground   | string | A normal CSS values                                              |
| buttonBorder       | string | A normal CSS values                                              |
| buttonBorderRadius | string | A normal CSS values                                              |
| buttonFont         | string | Everything about the font, example values: "bold 15px roboto"    |
| buttonTextColor    | string | A normal CSS values                                              |
| buttonMargin       | string | A normal CSS values                                              |

#### Example usage

---

    import { useState } from "react";
    import Modal from "./components/Modal";

    function App() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <button onClick={() => setShow(true)}>Open Modal</button>
            <Modal
                onClose={() => setShow(false)}
                show={show}
                message="The modal is opened!"
                closeButton={true}
                borderRadius="5px"
                overflow="hidden"
                headerBackground="gray"
                addNewButton
                newButtonText="Go to..."
            />
        </div>
    );
    }
    export default App;

---
