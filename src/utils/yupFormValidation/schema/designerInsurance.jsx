import * as yup from 'yup'

const designerInsuranceOneSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('first name is a required field')
    .matches(/^[aA-zZ\s]+$/, 'only alphabets are allowed for this field')
    .min(3)
    .max(30),
  lastName: yup
    .string()
    .required('last name is a required field')
    .matches(/^[aA-zZ\s]+$/, 'only alphabets are allowed for this field')
    .min(3)
    .max(30),
})
const designerInsuranceTwoSchema = yup.object().shape({
  email: yup.string().required().email(),
})
const designerInsuranceThreeSchema = yup.object().shape({
  age: yup.string().required(),
})

export {
  designerInsuranceOneSchema,
  designerInsuranceTwoSchema,
  designerInsuranceThreeSchema,
}
