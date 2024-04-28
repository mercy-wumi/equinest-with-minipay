import Link from "next/link";
import React from "react";

interface Props {
	isOpen: boolean;
	onClose: () => void;
	success: boolean;
	loading: boolean;
}

const TransactionModal: React.FC<Props> = ({
	isOpen,
	onClose,
	success,
	loading,
}) => {
	return (
		<>
			{isOpen && (
				<div className="fixed z-10 inset-0 overflow-y-auto bg-primaryBlack bg-opacity-90">
					<div className="flex items-center justify-center min-h-screen">
						<div className="flex flex-col justify-center items-center bg-white rounded p-6 px-7 shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full">
							<div className="self-end">
								<button className="text-xl" onClick={onClose}>
									x
								</button>
							</div>
							<div className="flex flex-col gap-1 text-center">
								<h3 className="text-lg lg:text-3xl font-medium text-gray-900">
									{loading
										? "Loading..."
										: success
										? "Successful!"
										: "Failed!"}
								</h3>
								<p className="text-sm text-gray-500">
									{loading
										? "Please wait while processing..."
										: success
										? "Transaction was successful"
										: "Transaction failed"}
								</p>
							</div>
							{!loading && (
								<Link href="/dashboard" className="mt-5 sm:mt-6">
									<button
										type="button"
										className="justify-center rounded-md border-transparent shadow-sm px-4 py-3 bg-primaryYellow text-base font-medium text-darkGray hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:text-sm"
									>
										Back to Dashboard
									</button>
								</Link>
							)}
							{loading && (
								<div className="mt-5 sm:mt-6">
									<div className="flex justify-center items-center">
										<div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primaryYellow"></div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default TransactionModal;
