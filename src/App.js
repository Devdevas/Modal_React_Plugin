import { useState } from "react";
import Modal from "./components/Modal";
import closeIcon from "./assets/icone-fermer-et-x-noir.png";

function App() {
   const [show, setShow] = useState(false);
   return (
      <div>
         <button onClick={() => setShow(true)}>Open Modal</button>
         <Modal
            onClose={() => setShow(false)}
            show={show}
            message="The modal is opened!"
            borderRadius="5px"
            overflow="hidden"
            headerBackground="gray"
            addNewButton
            newButtonText="Go to..."
            closeIcon={closeIcon}
         />
      </div>
   );
}

export default App;
