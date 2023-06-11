import React, { useState } from "react";
import Modal from "react-modal";
import { createClient } from "@supabase/supabase-js";
import { useSanityContext } from "../context/SanityContext";
import { AiFillCloseCircle } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Precios = () => {
	const { preciosData } = useSanityContext();
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState("");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [currentService, setCurrentService] = useState("");
	const [errors, setErrors] = useState({});

	const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
	const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
	const supabase = createClient(supabaseUrl, supabaseKey);

	const openModal = (title) => {
		setCurrentService(title);
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
		resetForm();
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		if (validateForm()) {
			try {
				const { data, error } = await supabase.from("userdata").insert([
					{
						name,
						phone,
						email,
						date: selectedDate,
						time: selectedTime,
						service: currentService,
					},
				]);

				if (error) {
					console.error("Error al guardar los datos en Supabase:", error);
					toast.error(
						"Ocurrió un error al enviar la reserva, intentalo nuevamente mas tarde"
					);
				} else {
					console.log("Datos guardados en Supabase:", data);
					toast.success("La reserva fue enviada exitosamente", {
						position: "top-center",
						autoClose: 1500,
					});

					closeModal();
				}
			} catch (error) {
				console.error("Error al guardar los datos en Supabase:", error);
				toast.error(
					"Ocurrió un error al enviar la reserva, intentalo nuevamente mas tarde"
				);
			}
		}
        if (!selectedTime) {
            errors.time = "Selecciona una hora";
            setErrors(errors);
            return;
          }
	};

	const resetForm = () => {
		setSelectedDate(null);
		setSelectedTime("");
		setName("");
		setPhone("");
		setEmail("");
		setErrors({});
	};

	const validateForm = () => {
		const errors = {};

		if (name.trim().length < 4) {
			errors.name = "El nombre debe tener al menos 4 caracteres";
		}

		if (phone.trim().length < 8) {
			errors.phone = "El teléfono debe tener al menos 8 caracteres";
		}

		if (!email.includes("@")) {
			errors.email = "El email debe ser válido";
		}

		setErrors(errors);

		return Object.keys(errors).length === 0;
	};

	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			rounded: "xl",
		},
		overlay: {
			backgroundColor: "rgba(0, 0, 0, 0.4)",
		},
	};

	return (
		<div className="grid md:grid-cols-3 max-w-[950px] justify-items-center mx-auto">
			{preciosData.map((item, index) => (
				<div key={`${item._id}-${index}`} className="flex mx-auto justify-center px-2 mt-10">
					<div className="flex gap-2 bg-gray-300 border-[1px] border-sky-500 rounded-lg">
						<div>
							<div id="precios" className="bg-indigo-300 border-b-2 rounded-t-lg border-sky-500 w-full h-[60px] flex justify-center mx-auto items-center">
								<h1 className="text-center font-principal font-bold text-4xl">
									{item?.mainTitle}
								</h1>
							</div>
							<div className="px-2 max-w-[320px] md:w-full md:h-[790px] lg:h-[650px]">
								{item?.services[0]?.subtitles.map((subtitle, index) => (
									<div
										className="flex-col justify-center items-center"
										key={`${item._id}-${index}`}
									>
										<hr className="m-3 border-gray-400" />
										<p className="text-center flex items-center justify-center mx-auto font-principal font-bold mt-4">
											{subtitle}
										</p>
									</div>
								))}
							</div>
							<div className="flex-col justify-end">
								<div className="bg-indigo-300 w-full  border-[1px] border-sky-500 mt-4 flex justify-center mx-auto">
									<h1 className="m-4 font-principal text-5xl font-bold">
										{item?.services[0].price}{" "}
										<span className="text-2xl">Pesos</span>
									</h1>
								</div>
								<div className="bg-black rounded-b-lg hover:bg-gray-800 duration-300">
									<button
										className="flex text-white justify-center p-6 font-principal text-3xl mx-auto"
										onClick={() => openModal(item?.mainTitle)}
									>
										RESERVAR
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
			>
				<div className="">
					<button onClick={closeModal}>
						<AiFillCloseCircle size={25} color="red" className="" />
					</button>
					<h2 className="text-center font-principal underline text-indigo-800 font-bold text-xl md:text-3xl">
						Lavado {currentService}
					</h2>
					<p className="font-principal text-center w-[250px] flex justify-center mx-auto md:w-full text-xl mt-2">
						Hacé tu reserva, nuestro equipo se contactará contigo.
					</p>

					<div>
						<form onSubmit={handleFormSubmit}>
							<div className="flex flex-col justify-center items-center">
								<input
									type="text"
									name="name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									placeholder="Nombre"
									className={`border-[1px] border-gray-400 font-principal p-2 rounded-lg w-[200px] md:w-[400px] h-[50px] mt-4 ${
										errors.name ? "border-red-500" : ""
									}`}
								/>
								{errors.name && (
									<p className="text-red-500 font-principal mt-2">
										{errors.name}
									</p>
								)}
								<input
									type="tel"
									name="phone"
									value={phone}
									onChange={(e) => {
										const re = /^[0-9\b]+$/; // Expresión regular para permitir solo números
										if (e.target.value === "" || re.test(e.target.value)) {
											setPhone(e.target.value);
										}
									}}
									placeholder="Teléfono"
									className={`border-[1px] border-gray-400 rounded-lg p-2 w-[200px] md:w-[400px] h-[50px] mt-4 ${
										errors.phone ? "border-red-500" : ""
									}`}
								/>

								{errors.phone && (
									<p className="text-red-500 font-principal mt-2">
										{errors.phone}
									</p>
								)}
								<input
									type="text"
									name="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Email"
									className={`border-[1px] border-gray-400 rounded-lg p-2 w-[200px] md:w-[400px] h-[50px] mt-4 ${
										errors.email ? "border-red-500" : ""
									}`}
								/>
								{errors.email && (
									<p className="text-red-500 font-principal mt-2">
										{errors.email}
									</p>
								)}
								<DatePicker
									selected={selectedDate}
									onChange={(date) => setSelectedDate(date)}
									placeholderText="Fecha"
									className={`border-[1px] border-gray-400 rounded-lg p-2 w-[200px] md:w-[400px] h-[50px] mt-4 ml-6 md:ml-[4.6rem] ${
										errors.date ? "border-red-500" : ""
									}`}
									minDate={new Date()}
									filterDate={(date) => date.getDay() !== 0} // Filtrar domingos
								/>
								<select
									name="time"
									value={selectedTime}
									onChange={(e) => setSelectedTime(e.target.value)}
									className={`border-[1px] border-gray-400 rounded-lg w-[200px] md:w-[400px] h-[50px] mt-4 ${
										errors.time ? "border-red-500" : ""
									}`}
								>
									<option value="" disabled>
										Selecciona una hora
									</option>
									{/* Generar opciones de horarios de 30 en 30 minutos */}
									{Array.from({ length: 17 }, (_, i) => {
										const hour = i + 8;
										const time = `${hour.toString().padStart(2, "0")}:00`;
										const timeHalf = `${hour.toString().padStart(2, "0")}:30`;
										return (
											<>
												{hour < 17 && (
													<>
														<option key={`${i}-00`} value={time}>
															{time}
														</option>
														<option key={`${i}-30`} value={timeHalf}>
															{timeHalf}
														</option>
													</>
												)}
											</>
										);
									})}
								</select>

								<button
									type="submit"
									disabled={
										!name || !phone || !email || !selectedDate || !selectedTime
									}
									className={`bg-black text-white font-principal font-bold text-2xl rounded-lg w-[200px] md:w-[400px] mb-5 h-[50px] mt-4 hover:bg-gray-800 duration-300 ${
										!name || !phone || !email || !selectedDate || !selectedTime
											? "opacity-50 cursor-not-allowed"
											: ""
									}`}
								>
									Reservar
								</button>
							</div>
						</form>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default Precios;
