import { useEffect } from "react";

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}



const ModalSearch: React.FC<ModalProps> = ({isOpen, onClose, children}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className='fixed overflow-scroll h-screen inset-0 z-50 pl-3 pt-5 lg:pt-0 lg:pl-0 bg-gray-800/80'>
            <div className='max-w-7x1 h-screen mx-auto relative'>
                <div onClick={e => e.stopPropagation()} className='lg:absolute right-[300px] top-[20px] rounded-lg bg-gradient-to-t from-indigo-950 to-gray-500 shadow-lg w-[400px] lg:w-[800px] p-3'>
                <button onClick={onClose} className="btn btn-md btn-circle btn-ghost absolute right-2 top-2 text-white hover:text-red-500">✕</button>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ModalSearch;