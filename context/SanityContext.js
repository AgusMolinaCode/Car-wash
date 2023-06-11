import { createContext, useContext } from "react";
import { createClient } from "@sanity/client";
import { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
	projectId: "jmtsuj7a",
	dataset: "production",
	useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  apiVersion: '2022-08-30',
  persistSession: false,
});



const getHero = async () => {
	const query = `*[_type == "hero"]`;
	const results = await client.fetch(query);
	return results;
};

const getPrice = async () => {
	const query = `*[_type == "price"]`;
	const results = await client.fetch(query);
	return results;
};

const urlFor = (source) => {
	const builder = imageUrlBuilder(client);
	return builder.image(source);
};

export const SanityContext = createContext();

export const SanityProvider = ({ children }) => {
	const [heroData, setHeroData] = useState([]);
	const [preciosData, setPreciosData] = useState([]);

	useEffect(() => {
		getHero().then((data) => setHeroData(data));
		getPrice().then((data) => setPreciosData(data));
	}, []);

	const imageConfig = {
		projectId: "jmtsuj7a",
		dataset: "production",
		maxSize: 1200,
		defaultWidth: 500,
		defaultHeight: 500,
	};

	return (
		<SanityContext.Provider
			value={{ preciosData, heroData, imageConfig, urlFor }}
		>
			{children}
		</SanityContext.Provider>
	);
};

export const useSanityContext = () => useContext(SanityContext);
