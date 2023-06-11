import Layout from "@/Layout/layout";
import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Service from "@/components/Service";

export default function Home() {
	return (
		<>
			<Layout pagina="Home">
				<Header />
				<Experience />
				<Service />
			</Layout>
		</>
	);
}
