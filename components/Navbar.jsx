import React from "react";
import { DiCoda } from "react-icons/di";
import Link from "next/link";

const Navbar = () => {
	return (
		<div>
			<div className="h-20 flex justify-around items-center bg-[#e6e6e6]">
				<Link href="/">
				<div className="flex items-center">
					<DiCoda size={35} />
					<h1 className="font-principal font-semibold text-2xl">Power-Wash</h1>
				</div>
				</Link>

				<div>
					<Link href="#precios">
						<button className="bg-[#e6e6e6] border-2 border-black rounded-md px-4 py-2 font-principal font-semibold hover:bg-black hover:text-white duration-500">
							Reservas
						</button>
					</Link>
				</div>
			</div>

			<hr className="border-gray-400 border-[1.2px]" />
		</div>
	);
};

export default Navbar;
