import React from 'react'
import { Link } from 'react-router-dom'
import RandomUser from '../components/RandomUser'
import './home.css'

const Home = () => {
  return (
    <div className="container">
      <h1 className='heading'>Random User</h1>
      <p className='description'>This is an application that uses a custom React Hook to fetch users
        from <Link className='link' to={"https://randomuser.me/api"}>Random User API</Link> {" "} and displays the
        picture and their name on the page one. It shows the current user and a button for fetching
        the next user and a buttton for moving back to the previous user.
      </p>
      <RandomUser />
    </div>
  )
}

export default Home