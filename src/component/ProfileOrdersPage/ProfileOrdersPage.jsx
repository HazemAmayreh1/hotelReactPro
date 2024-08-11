import { useContext } from 'react';
import { CartContext } from '../../../context/cartContext'; 
const ProfileOrdersPage = () => {
  const { cart, updateOrder } = useContext(CartContext);
  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const updatedCart = [...cart];
    updatedCart[index] = {
      ...updatedCart[index],
      [name]: value
    };
    updateOrder(updatedCart); 
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
            <p className="mt-1 text-sm text-gray-600">
              Update your profile information.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div>
                    <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">
                      Full name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      id="user_name"
                      autoComplete="name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <input
                      type="text"
                      name="email_address"
                      id="email_address"
                      autoComplete="email"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Your Orders</h3>
            <ul className="mt-5 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cart.map((item, index) => (
                <li key={index} className="col-span-1 flex shadow-sm rounded-md">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 bg-gray-500 text-white text-sm font-medium rounded-l-md">
                    {index + 1}
                  </div>
                  <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                    <div className="flex-1 px-4 py-2 text-sm truncate">
                      <a href="#" className="text-gray-900 font-medium hover:text-gray-600">
                        {item.name}
                      </a>
                      <p className="text-gray-500">${item.price_per_night}</p>
                      <input
                      type="date"
                      name="due_date"
                      value={item.due_date || ''}
                      onChange={(event) => handleInputChange(event, index)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                    />
                    <input
                      type="date"
                      name="expiry_date"
                      value={item.expiry_date || ''}
                      onChange={(event) => handleInputChange(event, index)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                    />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOrdersPage;
