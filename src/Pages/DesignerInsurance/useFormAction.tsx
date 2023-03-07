import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { optionOne, optionTwo, optionThree } from 'utils/yupFormValidation'

type errorsType = {
  firstName?: string
  lastName?: string
  email?: string
  age?: string | number
}

const useFormAction = () => {
  const [currentStep, setStep] = useState(0)

  const [collectedData, setCollectedData] = useState<any>()

  const options = [optionOne, optionTwo, optionThree]
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<errorsType>(options[currentStep])

  const handleBack = () => setStep(currentStep - 1)

  const handleNext = async (form: errorsType) => {
    setCollectedData(form)
    setStep(currentStep + 1)
    if (currentStep === 3) {
      reset()
      return
    }
  }

  const ShouldShow = (item: number) => currentStep !== item

  return {
    errors,
    ShouldShow,
    handleBack,
    handleSubmit,
    handleNext,
    currentStep,
    collectedData,
    register,
  }
}

export default useFormAction
