// import React from "react";
// import { Field } from "formik";
// import { useForm } from "react-hook-form";

// export const InputFormik = ({
// 	name,
// 	label,
// 	placeholder,
// 	type,
// 	value,
// 	onChange,
// 	error,
// 	validate,
// }) => {
// 	return (
// 		<div className="flex flex-col w-full gap-2 whi">
// 			<label htmlFor={name} className="font-medium">
// 				{label}
// 			</label>
// 			<Field
// 				type={type}
// 				className="signup-input-form py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
// 				name={name}
// 				placeholder={placeholder}
// 				value={value}
// 				onChange={onChange}
// 				validate={validate}
// 			/>
// 			<span className="text-red text-sm">{error}</span>
// 		</div>
// 	);
// };

import React, { ChangeEvent, FC } from "react";

interface InputProps {
	name: string;
	label: string;
	placeholder?: string;
	type: string;
	value?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	error?: string;
	validate?: any; // Adjust the type as per your validation requirements
	className?: string;
}

const Input: FC<InputProps> = ({
	name,
	label,
	placeholder,
	type,
	value,
	onChange,
	error,
	className,
}) => {
	return (
		<div className={`flex flex-col w-full gap-2 ${className}`}>
			<label htmlFor={name} className="font-medium">
				{label}
			</label>
			<input
				type={type}
				className="signup-input-form py-2 px-3 lg:py-3 border border-darkGray rounded placeholder:text-[#c5c3c3a8]"
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			<span className="text-red text-sm w-[10%]">{error}</span>
		</div>
	);
};

export default Input;
