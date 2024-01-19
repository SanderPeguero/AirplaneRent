import React from 'react'
import UserProfile from '../../components/Account/UserProfile'
import AircraftReserves from '../../components/AircraftReserves/AircraftReserves'
import Navbar from '../../components/Navbar/Navbar'
import ReserveDetails from '../../components/ReserveDetails/ReserveDetails'
import Cards from '../../components/Cards/Cards'
const Dashboard = () => {
  return (
    <div className=''>
      <Navbar />
      <div class="flex flex-row">
        <div className='flex flex-col'>
          <UserProfile />
          <AircraftReserves />
        </div>
        <div className='flex flex-col'>
          <Cards />
          <ReserveDetails />
        </div>
      </div>
    </div>
    // <div className='flex flex-col'>
    //     <Navbar/>

    //     <UserProfile />
    //     <AircraftReserves />
    // </div>
    // <div className='flex flex-col'>
    //     <Navbar/>
    //     <UserProfile />
    //     <AircraftReserves />
    // </div>
  )
}

export default Dashboard