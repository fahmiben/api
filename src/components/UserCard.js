import React from 'react'
import { Card } from 'react-bootstrap'

export default function UserCard({user}) {
    return (
        <div>
            
            
        <Card style={{ width: '18rem' }}>
            <Card.Body>
               <Card.Title>name: {user.name}</Card.Title>
               <Card.Subtitle className="mb-2 text-muted">username: {user.username}</Card.Subtitle>
               <Card.Subtitle className="mb-2 text-muted">email: {user.email}</Card.Subtitle>
               <Card.Subtitle className="mb-2 text-muted">address: street: {user.address.street}</Card.Subtitle>
               <Card.Subtitle className="mb-2 text-muted">suite: {user.address.suite}</Card.Subtitle>
               <Card.Subtitle className="mb-2 text-muted"> city: {user.address.city}</Card.Subtitle>
               <Card.Subtitle className="mb-2 text-muted"> zipcode: {user.address.zipcode}</Card.Subtitle>
               
               <Card.Subtitle className="mb-2 text-muted"> geo: {user.address.lat}</Card.Subtitle>
               <Card.Subtitle className="mb-2 text-muted">  {user.address.lng}</Card.Subtitle>
               <Card.Subtitle className="mb-2 text-muted">phone: {user.phone}</Card.Subtitle>
               <Card.Subtitle className="mb-2 text-muted">website: {user.website}</Card.Subtitle>
               <Card.Subtitle className="mb-2 text-muted">Company: name:{user.company.name}</Card.Subtitle>
               <Card.Subtitle className="mb-2 text-muted">catchPhrase:{user.company.catchPhrase}</Card.Subtitle>
               <Card.Subtitle className="mb-2 text-muted">bs:{user.company.bs}</Card.Subtitle>
            </Card.Body>
        </Card>
        </div>
    )
}
