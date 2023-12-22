/* eslint-disable react/prop-types */
const ErrorMessageFild = ({ error, touched }) => {
	return error && touched && <small className="text-xs text-[#F3145F] ml-1">{error}</small>;
};

export default ErrorMessageFild;
