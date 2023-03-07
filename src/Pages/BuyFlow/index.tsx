/* eslint-disable no-unused-vars */
import Button from 'Components/Button'
import Input from 'Components/Input'
import { ChangeEvent, useState } from 'react'

type errors = {
  firstName?: string
  lastName?: string
  email?: string
  age?: string
}
const BuyFlow = () => {
  const [currentStep, setStep] = useState(0)

  const [errors, setErrors] = useState<errors>({})
  const [collectedData, setCollectedData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
  })
  
  const validate = async (form: errors) => {
    const test = [['firstName', 'lastName'], ['email'], ['age']]
    let allError: any = {}
    Object.entries(form).forEach(([key, value]) => {
      if (
        test[currentStep].includes(key) &&
        (value.toString() === '' || value.toString() === '0')
      ) {
        allError[key] = 'is required'
      }
    })

    setErrors({ ...allError })
    return { allError }
  }
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    validate(collectedData)
    setCollectedData({ ...collectedData, [name]: value })
  }

  const onBlur = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    validate(collectedData)
    setCollectedData({ ...collectedData, [name]: value })
  }

  const handleBack = () => setStep(currentStep - 1)

  const handleNext = async () => {
    const { allError } = await validate(collectedData)

    if (Object.keys(allError).length > 0) return
    setStep(currentStep + 1)
    if (currentStep === 3) return
  }

  const inputObject = (value: string, name: string) => ({
    name: name,
    type: value,
    onChange,
    onBlur,
  })

  const ShouldShow = (item: number) => currentStep !== item
  console.log(!currentStep, errors)

  return (
    <div className="buy-flow">
      {/* <h4>Buying {PRODUCT_IDS_TO_NAMES[ProductIds.devIns]}</h4> */}

      {
        [
          <div className="buy-flow__name-field">
            <Input
              error={errors.firstName && `first name ${errors.firstName}`}
              label="First Name"
              otherInputObject={{ ...inputObject('test', 'firstName') }}
            />
            <Input
              error={errors.lastName && `last name ${errors.lastName}`}
              label="Last Name"
              otherInputObject={{ ...inputObject('test', 'lastName') }}
            />
          </div>,
          <Input
            error={errors.email && `email ${errors.email}`}
            label="Email"
            otherInputObject={{ ...inputObject('email', 'email') }}
          />,
          <Input
            error={errors.age && `age ${errors.age}`}
            label="Age"
            otherInputObject={{ ...inputObject('number', 'age') }}
          />,
          // <SummaryStep collectedData={collectedData} />,
        ][currentStep]
      }
      {ShouldShow(3) && (
        <div className="buy-flow__btn">
          <Button
            onClick={handleBack}
            disabled={!currentStep}
            className="buy-flow__btn__left"
          >
            Back
          </Button>
          <Button onClick={handleNext}>
            {ShouldShow(2) ? 'Next' : 'Submit'}
          </Button>
        </div>
      )}
    </div>
  )
}

export default BuyFlow
