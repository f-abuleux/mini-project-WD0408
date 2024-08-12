import { useEffect } from "react";

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const ModalLogin: React.FC<ModalProps> = ({isOpen, onClose, children}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div onClick={onClose} className='fixed h-screen inset-0 z-50 bg-gray-800/50'>
            <div className='max-w-7x1 h-screen mx-auto relative'>
                <div onClick={e => e.stopPropagation()} className='absolute right-[210px] top-[75px] rounded-lg bg-gradient-to-t from-indigo-950 to-gray-500 shadow-lg w-[265px] p-3'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ModalLogin;