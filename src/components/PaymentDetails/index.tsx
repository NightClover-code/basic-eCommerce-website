//importing hooks
import { useState } from 'react';
//importing components
import FormInput from '../Forms/FormInput';
import Button from '../Forms/Button';
import { CountryDropdown } from 'react-country-region-selector';
//importing types
import { Address } from '../../interfaces';
//initial address
const initialAddress: Address = {
  line1: '',
  line2: '',
  city: '',
  state: '',
  postalCode: '',
  country: '',
};
//payment details
const PaymentDetails = () => {
  //local state
  const [shippingAddress, setShippingAddress] = useState<Address>(
    initialAddress
  );
  const [billingAddress, setBillingAddress] = useState<Address>(initialAddress);
  const [recipientName, setRecipientName] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  //on submit handler
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  //handling shipping info
  const handleShipping = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setShippingAddress({
      ...shippingAddress,
      [name]: value,
    });
  };
  //handling billing info
  const handleBilling = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBillingAddress({
      ...billingAddress,
      [name]: value,
    });
  };
  //handling country info
  const handleCountryInfo = (
    value: string,
    addressType: 'shipping' | 'billing'
  ) => {
    addressType === 'shipping'
      ? setShippingAddress({
          ...shippingAddress,
          country: value,
        })
      : setBillingAddress({
          ...billingAddress,
          country: value,
        });
  };
  return (
    <div className="payment__details">
      <form onSubmit={handleFormSubmit}>
        <div className="group">
          <h2>Shipping Address</h2>
          <FormInput
            placeholder="Recipient Name"
            type="text"
            value={recipientName}
            onChange={e => setRecipientName(e.target.value)}
          />
          <FormInput
            placeholder="Line 1"
            type="text"
            name="line1"
            value={shippingAddress.line1}
            onChange={e => handleShipping(e)}
          />
          <FormInput
            placeholder="Line 2"
            type="text"
            value={shippingAddress.line2}
            onChange={e => handleShipping(e)}
          />
          <FormInput
            placeholder="City"
            type="text"
            value={shippingAddress.city}
            onChange={e => handleShipping(e)}
          />
          <FormInput
            placeholder="State"
            type="text"
            value={shippingAddress.state}
            onChange={e => handleShipping(e)}
          />
          <FormInput
            placeholder="Postal Code"
            type="text"
            value={shippingAddress.postalCode}
            onChange={e => handleShipping(e)}
          />
          <div className="form__input__container checkout__input">
            <CountryDropdown
              valueType="short"
              value={shippingAddress.country}
              onChange={value => handleCountryInfo(value, 'shipping')}
            />
          </div>
        </div>
        <div className="group">
          <h2>Billing Address</h2>
          <FormInput
            placeholder="Name on Card"
            type="text"
            value={nameOnCard}
            onChange={e => setNameOnCard(e.target.value)}
          />
          <FormInput
            placeholder="Line 1"
            type="text"
            value={billingAddress.line1}
            onChange={e => handleBilling(e)}
          />
          <FormInput
            placeholder="Line 2"
            type="text"
            value={billingAddress.line2}
            onChange={e => handleBilling(e)}
          />
          <FormInput
            placeholder="City"
            type="text"
            value={billingAddress.city}
            onChange={e => handleBilling(e)}
          />
          <FormInput
            placeholder="State"
            type="text"
            value={billingAddress.state}
            onChange={e => handleBilling(e)}
          />
          <FormInput
            placeholder="Postal Code"
            type="text"
            value={billingAddress.postalCode}
            onChange={e => handleBilling(e)}
          />
          <div className="form__input__container checkout__input">
            <CountryDropdown
              valueType="short"
              value={billingAddress.country}
              onChange={value => handleCountryInfo(value, 'billing')}
            />
          </div>
        </div>
        <div className="group">
          <h2>Card Details</h2>
        </div>
      </form>
    </div>
  );
};

export default PaymentDetails;