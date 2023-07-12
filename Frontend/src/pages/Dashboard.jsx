import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import InvoiceForm from '../components/InvoiceForm'
import InvoiceItem from '../components/InvoiceItem'
import Spinner from '../components/Spinner'
import { getInvoices, reset } from '../features/invoices/invoiceSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { invoices, isLoading, isError, message } = useSelector(
    (state) => state.invoices
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getInvoices())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Invoices Dashboard</p>
      </section>

      <InvoiceForm />

      <section className='content'>
        {invoices.length > 0 ? (
          <div className='invoices'>
            {invoices.map((invoice) => (
              <InvoiceItem key={invoice._id} invoice={invoice} />
            ))}
          </div>
        ) : (
          <h3>You have not set any invoices</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard
