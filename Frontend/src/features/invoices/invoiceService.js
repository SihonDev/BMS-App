import axios from 'axios'

const API_URL = '/api/invoices/'

// Create new invoice
const createInvoice = async (invoiceData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, invoiceData, config)

  return response.data
}

// Get user invoices
const getInvoices = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user invoice
const deleteInvoice = async (invoiceId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + invoiceId, config)

  return response.data
}

const invoiceService = {
  createInvoice,
  getInvoices,
  deleteInvoice,
}

export default invoiceService
