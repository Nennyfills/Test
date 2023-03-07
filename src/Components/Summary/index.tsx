import React from 'react'
import { Link } from 'react-router-dom'

export interface SummaryProps {
  collectedData: {
    firstName?: string
    lastName?: string
    email: string
    age: number
  }
  purchaseType: string
}

const Summary: React.FC<SummaryProps> = ({ collectedData, purchaseType }) => {
  return (
    <section>
      <div>
        Name: {`${collectedData.firstName} ${collectedData.lastName}`}
      </div>
      <div>Email: {collectedData.email}</div>
      <div>Age: {collectedData.age}</div>
      <div>
        <Link to={`/purchased=${purchaseType}`}>Purchase</Link>
      </div>
    </section>
  )
}

export default Summary
