import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children, pagina }) {
	return (
		<>
			<Head>
				<title>{`Power Wash - ${pagina}`}</title>
				<meta name="description" content="Power Wash Home Page" />
			</Head>

			<div>
				<header>
					<Navbar />
				</header>

				<main>
					{children}

					<Footer />
				</main>
			</div>
		</>
	);
}
