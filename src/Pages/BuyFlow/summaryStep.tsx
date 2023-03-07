import React from 'react'
import { Link } from 'react-router-dom'

interface SummaryStepProps {
  collectedData: {
    firstName: string
    lastName: string
    email: string
    age: number
  }
}

const SummaryStep: React.FC<SummaryStepProps> = ({ collectedData }) => {
  return (
    <section>
      <div>
        Name: <span>{collectedData.firstName}</span>
        <span>{collectedData.firstName}</span>
      </div>
      <div>Age: {collectedData.lastName}</div>
      <div>Email: {collectedData.email}</div>
      <div>Age: {collectedData.age}</div>
      <div>
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </section>
  )
}

export default SummaryStep
