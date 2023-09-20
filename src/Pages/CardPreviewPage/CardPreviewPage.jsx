import React, { useState } from 'react';

const  CardPreviewPage = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [cardCloseDate, setCardCloseDate] = useState(null);

  // Function to handle option selection
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Function to handle card close date selection
  const handleCardCloseDateChange = (e) => {
    setCardCloseDate(e.target.value);
  };

  // Calculate the current date and a date 10 days from now
  const currentDate = new Date();
  const tenDaysFromNow = new Date();
  tenDaysFromNow.setDate(currentDate.getDate() + 10);

  return (
    <div>
      <div>
        <label>
          Select an option:
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="">Select an option</option>
            <option value="webnire">Webnire</option>
            <option value="cardchalenge">Cardchalenge</option>
          </select>
        </label>
      </div>

      {selectedOption && (
        <div>
          <label>
            Select a card close date:
            <input
              type="date"
              value={cardCloseDate}
              onChange={handleCardCloseDateChange}
            />
          </label>
        </div>
      )}

      {selectedOption && cardCloseDate && (
        <div>
          {new Date(cardCloseDate) > currentDate && (
            <p>Show data after 10 days from the card close date.</p>
          )}
          {new Date(cardCloseDate) < currentDate && (
            <p>Show data before the card close date.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CardPreviewPage;
