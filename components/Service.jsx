import React from "react";
import Precios from "./Precios";


const Service = () => {
	return (
		<div className="bg-[#e6e6e6] pb-32">
			<h1 className="text-center text-[#e6dddd] font-principal font-bold text-[4rem] md:text-[9rem] lg:text-[12rem] leading-3 pt-14 md:pt-32">
				SERVICIO
			</h1>
			<div className="">
				<div className="flex justify-center">
					<h1 className="text-4xl md:text-6xl font-bold text-center text-black font-principal ">
						Nuestro <span className="text-indigo-500">Servicio</span>
					</h1>
				</div>
			</div>

			<div className="flex flex-wrap justify-center mx-auto gap-4 mt-8 md:mt-16 px-2 items-center ">

				<div>
					
					<video className="w-full h-full rounded-2xl lg:h-[400px] " autoPlay loop muted>
						<source
							className=""
							src="/images/video.mp4"
							type="video/mp4"
						/>
					</video>
				</div>
				<div className="flex-col max-w-[600px]">
					<h1 className="text-left font-principal text-3xl font-bold">
						Cuidado interior y exterior
					</h1>
					<h2 className="text-left font-principal text-lg mt-8">
						En nuestro lavadero de autos de excelencia, ofrecemos un servicio
						completo que abarca tanto el cuidado exterior como el interior de tu
						vehículo. Realizamos lavados detallados, encerados, pulidos y
						limpiezas a profundidad de tapicerías, garantizando un resultado
						impecable.
					</h2>
				</div>
			</div>

			<div>
				<h1 className="text-center font-principal text-5xl mt-14 font-bold text-indigo-500">Precios</h1>
				<Precios  />
			</div>
		</div>
	);
};

export default Service;
