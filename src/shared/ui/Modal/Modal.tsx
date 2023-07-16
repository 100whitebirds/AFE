import { ReactNode } from 'react';

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  // const { className, children, isOpen, onClose } = props;
  // return <Portal>dsaf</Portal>;
};
