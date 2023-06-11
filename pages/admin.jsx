import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function Index() {
	const [password, setPassword] = useState("");
	const router = useRouter();

	const handleSignIn = (event) => {
		event.preventDefault();

		if (password === "123") {
			localStorage.setItem("isPasswordEntered", "true");
			router.push("/admin/administracion");
		}
	};

	return (
		<div className="flex items-center justify-center bg-[#e6e6e6] h-screen">
			<div className="text-center">
				<h1 className="font-principal text-2xl font-bold underline underline-offset-2">
					Página de Administración
				</h1>
                <p className="text-lg font-principal font-bold mt-2">{'Contraseña para ingresar "123"'}</p>
				<form onSubmit={handleSignIn} className="mt-4 mx-auto w-[250px]">
					<label className="font-principal text-2xl font-bold">
						Contraseña:
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="border border-gray-300 rounded-md px-2 py-1 mt-5 w-full"
						/>
					</label>
					<button
						type="submit"
						className="bg-blue-500 text-white rounded-md px-4 py-2 mt-2 w-full font-principal flex justify-center items-center gap-2 text-xl font-bold"
					>
					Ingresar<FaArrowAltCircleRight />	
					</button>
					<Link href="/">
						<button
							type="submit"
							className="bg-red-400 text-white rounded-md px-4 py-2 mt-2 flex justify-center items-center gap-2 w-full font-principal text-xl font-bold"
						>
						<FaArrowAltCircleLeft />	Volver
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
}
