export const Input = ({ label, type = 'text', value, onChange, textarea, placeholder }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
      {textarea ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring focus:ring-blue-500"
          rows="4"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring focus:ring-blue-500"
        />
      )}
    </div>
  );
};
