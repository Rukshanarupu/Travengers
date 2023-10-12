import { useState } from 'react';


const Contact = () => {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  const toggleAdditionalFields = () => {
    setShowAdditionalFields(!showAdditionalFields);
  };

  return (
    <div>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message"></textarea>
        {showAdditionalFields && (
          <div>
            <input type="tel" placeholder="Phone" />
            <input type="text" placeholder="Company" />
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
      <button onClick={toggleAdditionalFields}>
        {showAdditionalFields ? 'Hide Additional Fields' : 'Show Additional Fields'}
      </button>
    </div>
  );
}

export default Contact;
