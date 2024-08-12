import { useEffect } from "react";

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const ModalProfile: React.FC<ModalProps> = ({isOpen, onClose, children}) => {
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
                <div onClick={e => e.stopPropagation()} className='absolute right-[170px] top-[105px] rounded-lg bg-secondary shadow-lg w-[150px] p-3'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ModalProfile;