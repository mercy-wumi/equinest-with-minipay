import React from 'react'

const Subscribe = () => {
  return (
		<section className="p-5 lg:px-16 lg:py-16 bg-darkGray">
			<div className=" text-center md:text-left bg-primaryYellow text-darkGray p-5 lg:px-16 lg:py-20 rounded-xl flex gap-8 flex-col lg:flex-row justify-between">
				<div>
					<h3 className="text-[1.5rem] lg:text-3xl w-full font-bold">
						Subscribe to Our Newsletter
					</h3>
					<p className="text-sm lg:text-base">
						For New updates, resources and articles. Join Now
					</p>
				</div>
				<div className="lg:w-[50%]">
					<div className="flex flex-col lg:flex-row justify-between gap-4 lg:border lg:border-darkGray p-1 rounded-lg">
						<input
							placeholder="Email"
							className="bg-transparent p-2 rounded bg-primaryYellow placeholder:text-lightGray w-full border lg:border-none focus:outline-none px-2"
						/>
						<button className="bg-darkGray text-white rounded p-4 py-3">
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</section>
  );
}

export default Subscribe
