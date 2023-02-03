import React from 'react'
import Modal from '../components/Modal'
import Navbar from '../components/Navbar'
import Table from '../components/Table'

const Dashboard = () => {
  return (
    <div className='container mx-auto relative'>
      <Navbar />
      <Modal />
      <Table />
    </div>
  )
}

export default Dashboard
