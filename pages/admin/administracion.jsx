import { useEffect } from "react";
import useSWR from "swr";
import ProtectedRoute from "../../components/ProtectedRoute";
import { useRouter } from "next/router";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const fetchClientes = async () => {
	const { data, error } = await supabase.from("userdata").select("*");
	if (error) {
		throw new Error("Error fetching clientes");
	}
	return data;
};

export default function Administracion() {
	const router = useRouter();
	const {
		data: clientes,
		error,
		mutate: mutateClientes,
	} = useSWR("userdata", fetchClientes);

	const handleSignOut = () => {
		localStorage.removeItem("isPasswordEntered");
		router.push("/");
	};

	const handleDeleteCliente = async (id) => {
		const { error } = await supabase.from("userdata").delete().eq("id", id);
		if (error) {
			throw new Error("Error deleting cliente");
		}
		// Actualizar la lista de clientes
		mutateClientes();
	};

	useEffect(() => {
		if (error) {
			console.error(error);
		}
	}, [error]);

	return (
		<ProtectedRoute>
			<div className="">
				<h1 className="text-center font-principal text-2xl mt-5 underline underline-offset-2">
					Panel de administración
				</h1>
				<button
					onClick={handleSignOut}
					className="flex justify-center items-center gap-2 mx-auto p-2 bg-red-300 rounded-lg font-principal font-bold mt-5"
				>
					<FaArrowAltCircleLeft />
					Cerrar sesión
				</button>
				<div className="mt-5">
					<h2 className="text-center font-principal text-xl mb-3">Clientes</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-10 px-1 md:px-5 mx-auto">
						{clientes?.map((cliente) => (
							<div
								className="border-2 border-indigo-300 rounded-lg"
								key={cliente.id}
							>
								<p className="px-2 text-center py-2 font-principal font-semibold">
									{cliente.name}
								</p>
								<p className="px-2 text-center py-2 font-principal font-semibold whitespace-pre-wrap">
									{cliente.email}
								</p>
								<p className="px-2 text-center py-2 font-principal font-semibold">
									{cliente.phone}
								</p>
								<p className="px-2 text-center py-2 font-principal font-semibold">
									{cliente.date}
								</p>
								<p className="px-2 text-center py-2 font-principal font-semibold">
									{cliente.time}
								</p>
								<p className="px-2 text-center py-2 font-principal font-semibold">
									{cliente.service}
								</p>
								<p className="px-2 text-center py-2 border-t-2 border-indigo-300">
									<button
										onClick={() => handleDeleteCliente(cliente.id)}
										className="text-red-500 font-principal font-bold text-lg flex justify-center mx-auto"
									>
										Eliminar
									</button>
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</ProtectedRoute>
	);
}
