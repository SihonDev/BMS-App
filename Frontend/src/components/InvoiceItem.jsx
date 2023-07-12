import { useDispatch } from 'react-redux'
import { deleteInvoice } from '../features/invoices/invoiceSlice'

function InvoiceItem({ invoice }) {
  const dispatch = useDispatch()

  return (
    <div className='invoice'>
      <div>{new Date(invoice.createdAt).toLocaleString('en-US')}</div>
      <h2>{invoice.text}</h2>
      <button onClick={() => dispatch(deleteInvoice(invoice._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default InvoiceItem
