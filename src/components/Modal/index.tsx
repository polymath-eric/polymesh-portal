import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useWindowWidth } from '~/hooks/utility';
import Icon from '../Icon';
import { StyledBackdrop, StyledModal, StyledCloseButton } from './styles';

interface KeyboardEvent {
  key: string;
}

interface IModalProps {
  handleClose: () => void | React.ReactEventHandler | React.ChangeEventHandler;
  children: React.ReactNode;
  disableOverflow?: boolean;
}

const modalRoot = document.getElementById('modal-root') as Element;

const Modal: React.FC<IModalProps> = ({
  handleClose,
  children,
  disableOverflow,
}) => {
  const { isMobile } = useWindowWidth();

  // Disabling page scroll when modal is open
  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => document.body.classList.remove('no-scroll');
  }, []);

  const handleBackdropClick: React.ReactEventHandler = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    handleClose();
  };

  useEffect(() => {
    const handleCloseOnEsc = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') {
        return;
      }
      handleClose();
    };

    window.addEventListener('keydown', handleCloseOnEsc);

    return () => {
      window.removeEventListener('keydown', handleCloseOnEsc);
    };
  }, [handleClose]);

  return createPortal(
    <StyledBackdrop onMouseDown={handleBackdropClick}>
      <StyledModal disableOverflow={disableOverflow}>
        {isMobile && (
          <StyledCloseButton onClick={handleClose}>
            <Icon name="CloseIcon" size="24px" />
          </StyledCloseButton>
        )}
        {children}
      </StyledModal>
    </StyledBackdrop>,
    modalRoot,
  );
};

export default Modal;
