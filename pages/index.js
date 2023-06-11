import Layout from "../Layout/Layout";
import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Service from "@/components/Service";
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
	return (
		<>
			<Layout pagina="Home">
				<Header />
				<Experience />
				<Service />
				<WhatsAppButton />
			</Layout>
		</>
	);
}
