import { Button, Input, Summary } from 'Components'
import { ProductIds } from 'Config/productIds';

import useFormAction from './useFormAction'


const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.designIns]: 'Designer Insurance',
}


const DesignerInsurance = () => {
  const {
    errors,
    ShouldShow,
    register,
    handleSubmit,
    handleNext,
    handleBack,
    currentStep,
    collectedData,
  } = useFormAction()

  return (
    <div className="buy-flow">
      <h4>Buying {PRODUCT_IDS_TO_NAMES[ProductIds.designIns]}</h4>

      {
        [
          <div className="buy-flow__name-field">
            <Input
              error={errors.firstName && errors.firstName.message}
              label="First Name"
              otherInputObject={{ ...register('firstName') }}
            />
            <Input
              error={errors.lastName && errors.lastName.message}
              label="Last Name"
              otherInputObject={{ ...register('lastName') }}
            />
          </div>,
          <Input
            error={errors.email && errors.email.message}
            label="Email"
            otherInputObject={{ ...register('email') }}
          />,
          <Input
            error={errors.age && errors.age.message}
            label="Age"
            otherInputObject={{ ...register('age'), type: 'number' }}
          />,
          <Summary
            collectedData={collectedData}
            purchaseType={ProductIds.designIns}
          />,
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
          <Button onClick={handleSubmit(handleNext)}>
            {ShouldShow(2) ? 'Next' : 'Submit'}
          </Button>
        </div>
      )}
    </div>
  )
}

export default DesignerInsurance
