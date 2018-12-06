import React from 'react'

const RemoveConfirmationDialog = ({onClose, onConfirm}) => (
  <div className="remove-confirmation">
    <h1 className="remove-confirmation__title">Delete Expense?</h1>
    <div className="remove-confirmation__buttons">
      <button className="button button--secondary" onClick={onClose}>Cancel</button>
      <button className="button button--warning" onClick={() => {
        onConfirm()
        onClose()
      }}>Yes, delete it!</button>
    </div>
  </div>
)

export default RemoveConfirmationDialog