import { useModalContext } from "../../context/modal";
import Modal from "../Modal";
import EditForm from "../EditForm";
import DeleteForm from "../DeleteForm";

function ContainerModal(){

    const {  modalContent } = useModalContext();

    if(!modalContent){
        return null;
    }

    return(
        <Modal>
            {modalContent.category ? (
                <EditForm modalContent={modalContent} />
            ) : (
                <DeleteForm modalContent={modalContent} />
            )}
        </Modal>
    )


}

export default ContainerModal;