import { yupResolver } from '@hookform/resolvers/yup'
import { designerInsuranceOneSchema, designerInsuranceThreeSchema, designerInsuranceTwoSchema } from './schema/designerInsurance'

const optionOne = {
  resolver: yupResolver(designerInsuranceOneSchema),
}
const optionTwo = {
  resolver: yupResolver(designerInsuranceTwoSchema),
}
const optionThree = {
  resolver: yupResolver(designerInsuranceThreeSchema),
}
export { optionOne, optionTwo, optionThree }
