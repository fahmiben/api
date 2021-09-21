import React from 'react'
import UserCard from './UserCard'

export default function UserList({user}) {
    return (
        <div className="user">
            {user.map((el)=>(<UserCard  user={el}/>))}
        </div>
    )
}
