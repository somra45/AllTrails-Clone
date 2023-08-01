import { useSelector } from "react-redux";
import CreateReviewForm from "../CreateReviewForm";
import EditReviewForm from "../EditReviewForm";
import './Modal.css'

const Modal = ( ) => {
  const modal = useSelector((state) => state.ui.modal)

    if (!modal) {
        return null;
      }
      let component;
      switch (modal) {
        case 'createreview':
          component = <CreateReviewForm />;
          break;
        case 'editreview':
          component = <EditReviewForm />
          break;
        default:
          return null;
      }

    return (
          component
    );
};

export default Modal;
  