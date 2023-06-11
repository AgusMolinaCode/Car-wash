import Image from "next/image";
import React from "react";
import { BsCheckAll } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

const Experience = () => {
	return (
		<div>
			<div className="bg-gray-800 px-2 text-center lg:px-[2rem]">
				<div className="pb-20">
					<div className="">
						<h1 className="text-center text-gray-900 font-principal font-bold text-[2.8rem] md:text-[6rem] lg:text-[8rem] leading-3 pt-14 md:pt-32">
							EXPERIENCIA
						</h1>
						<h1 className="text-white text-4xl md:text-6xl font-principal font-semibold">
							Basado en{" "}
							<span className="text-indigo-500 font-bold">Experiencia</span>
						</h1>
					</div>

					<div className="flex flex-wrap justify-center gap-10 mt-20">
						<div>
							<Image
								src="/images/lavado3.webp"
								width={400}
								height={400}
								className="rounded-md"
								alt="lavado_auto"
							/>
						</div>

						<div className="flex-col">
							<div className="hidden md:flex gap-10 h-[22rem]">
								<Image
									src="/images/lavado1.webp"
									width={300}
									height={100}
									className="rounded-md"
									alt="lavado_auto"
								/>
								<Image
									src="/images/lavado2.webp"
									width={300}
									height={100}
									className="rounded-md"
									alt="lavado_auto"
								/>
							</div>

							<div className="flex-col text-left mt-5 font-principal text-2xl text-white">
								<h1>Nuestra experiencia</h1>
								<div className="flex gap-5 mt-5">
									<BsCheckAll className="text-white text-xl" />
									<h1 className="text-lg text-gray-400 font-principal">
										Mas de <span className="text-white">1.000 vehiculos</span>{" "}
										pasaron por nuestro local.
									</h1>
								</div>
								<div className="flex gap-5 mt-5">
									<BsCheckAll className="text-white text-xl" />
									<h1 className="text-lg text-gray-400 font-principal">
										Tenemos{" "}
										<span className="text-white">+ 10 años de experiencia</span>{" "}
										en servicios premium.
									</h1>
								</div>
								<div className="flex gap-5 mt-5">
									<BsCheckAll className="text-white text-xl" />
									<h1 className="text-lg text-gray-400 font-principal">
									Comprometidos con   {" "}
										<span className="text-white">resultados</span>{" "}
										excepcionales.
									</h1>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr className="border-gray-400 border-[1.2px]" />
		</div>
	);
};

export default Experience;
