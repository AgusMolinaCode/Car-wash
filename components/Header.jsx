import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useSanityContext } from "../context/SanityContext";

const Header = () => {
	const { heroData, urlFor } = useSanityContext();

	const heroItem = heroData[0]; // Suponiendo que solo necesitas el primer elemento

	return (
		<div>
			<div className="bg-[#e6e6e6] pt-10 pb-10">
				<div className="flex flex-wrap justify-center px-2 ">
					<div className="max-w-[600px]">
						<div key={heroItem?._id}>
							<h1 className="text-center md:text-left text-[2.5rem] md:text-[4rem] xl:text-[5rem] font-principal font-medium leading-none">
								{heroItem?.title}{" "}
								<span className="text-indigo-500">{heroItem?.subtitle}</span>{" "}
							</h1>
						</div>
						<div className="max-w-[400px] mt-12 flex-col justify-center mx-auto md:mx-0 md:justify-start">
							<p className="font-semibold text-center md:text-left text-lg font-principal">
								Cuida tu Inversión con Elegancia: Car Wash Especializado en
								Autos de Lujo y Deportivos, para un Aspecto Impecable
							</p>
							<Link href="#precios">
								<button className="flex items-center justify-center mx-auto mt-5 gap-2">
									<span className="text-indigo-500 hover:text-indigo-600 duration-300 font-principal font-semibold">
										Ver Servicios
									</span>
									<FaArrowRight className="text-indigo-500" />
								</button>
							</Link>
						</div>
					</div>

					<div className="">
						<div>
							{heroItem?.image && heroItem?.image.asset && (
								<Image
									src={urlFor(heroItem.image.asset._ref).url()}
									width={700}
									height={700}
									alt="porsche-car"
								/>
							)}
						</div>
					</div>
				</div>
			</div>
			<hr className="border-gray-400 border-[1.2px]" />

			{/* Resto del código */}
		</div>
	);
};

export default Header;
