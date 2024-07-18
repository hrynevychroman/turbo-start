import type { CarrierCode, CountryCallingCode, CountryCode, E164Number, NationalNumber, NumberType } from 'libphonenumber-js'
import { AsYouType } from 'libphonenumber-js'

export type PhoneData = {
  phoneNumber?: E164Number
  countryCode?: CountryCode
  countryCallingCode?: CountryCallingCode
  carrierCode?: CarrierCode
  nationalNumber?: NationalNumber
  internationalNumber?: string
  possibleCountries?: string
  isValid?: boolean
  isPossible?: boolean
  uri?: string
  type?: NumberType
}

export function getPhoneData(phone: string): PhoneData {
  const asYouType = new AsYouType()
  asYouType.input(phone)
  const number = asYouType.getNumber()
  return {
    phoneNumber: number?.number,
    countryCode: number?.country,
    countryCallingCode: number?.countryCallingCode,
    carrierCode: number?.carrierCode,
    nationalNumber: number?.nationalNumber,
    internationalNumber: number?.formatInternational(),
    possibleCountries: number?.getPossibleCountries().join(', '),
    isValid: number?.isValid(),
    isPossible: number?.isPossible(),
    uri: number?.getURI(),
    type: number?.getType(),
  }
}
