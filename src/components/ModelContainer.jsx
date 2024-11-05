import React from 'react';

const ModalContainer = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 bg-green-600 text-white rounded-t-lg">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button className="text-xl" onClick={onClose}>✖️</button>
        </div>
        <div className="p-4">
          {children}
        </div>
        <div className="flex justify-end p-4 border-t">
          <button
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalContainer;
