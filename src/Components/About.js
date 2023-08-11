import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>
        Welcome to LK simple Currency Converter App! This app allows users to convert currencies
        and view historical exchange rate data.
      </p>
      <h3>Features</h3>
      <p>
        Select the base currency and target currency from the dropdown menus. Enter the amount
        in the base currency to convert. Click the "Convert" button to calculate the converted amount.
        Click the "Reset" button to clear the input fields.
      </p>
      <h3>Available currency</h3>
      <p>
        SGD, MYR, AUD, RUB, THB, USD, EUR, GBP, TWD, JPY, IDR, CNH, CAD, DKK, NZD, HKD, VND, MXN
      </p>
      <h3>Base currency</h3>
      <p>
        This is a dropdown select input where the user can choose the base currency.
      </p>
      <h3>Target currency</h3>
      <p>
        This is another dropdown select input where the user can choose the target currency.
      </p>
      <h3>Amount</h3>
      <p>
        This is an input field where the user can enter the amount of the base currency they want to convert.
      </p>
      <h3>Reverse Button</h3>
      <p>
        This button allows the user to quickly reverse the conversion by swapping the base and target currencies.
      </p>
      <h3>Convert button</h3>
      <p>
        When the user clicks this button, the app will calculate and display the converted amount in the target currency.
      </p>
      <h3>Reset button</h3>
      <p>
        This button allows the user to reset the form, clearing the amount and converted amount.
      </p>
      <h3>View history button</h3>
      <p>
        Clicking this button will show historical exchange rates for the selected currencies. Historical Data will show the user that clicks the "View History" button a table with historical exchange rates.
      </p>
      <h3>Conversion timestamp</h3>
      <p>
        This area will show the timestamp of the latest conversion.
      </p>
    </div>
  );
};

export default About;
