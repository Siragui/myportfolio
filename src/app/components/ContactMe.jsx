import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="grid grid-cols-3 gap-4 ">
        <div className="flex items-center p-4 bg-gradient-to-r from-primary-400 to-secondary-600 shadow-lg rounded-lg">
          <FaPhone className="text-white mr-4" size="24px" />
          <div className="text-white">
            
            <p>+253 77 52 97 07</p>
            <p>+253 77 68 39 47</p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gradient-to-r from-primary-400 to-secondary-600 shadow-lg rounded-lg">
          <FaEnvelope className="text-white mr-4" size="24px" />
          <div className="text-white">
            <p>siragui96@hotmail.com</p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gradient-to-r from-primary-400 to-secondary-600 shadow-lg rounded-lg">
          <FaMapMarkerAlt className="text-white mr-4" size="24px" />
          <div className="text-white">
            <p>Djibouti, Djibouti-Ville</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
