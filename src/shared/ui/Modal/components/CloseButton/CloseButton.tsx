import { Button } from '../../../Button/Button.tsx';
import { useModalContext } from '../../../../lib/modal/ModalContext.tsx';

export function CloseButton() {
  const { handleClose } = useModalContext();

  return (
    <Button buttonType={'closeModalCross'} onClick={handleClose}>
      ✖
    </Button>
  );
}
