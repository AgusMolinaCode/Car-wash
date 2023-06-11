import "@/styles/globals.css";
import { SanityProvider } from "../context/SanityContext";
import ReactModal from 'react-modal';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactModal.setAppElement('#__next');

export default function App({ Component, pageProps }) {
  return (
    <SanityProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </SanityProvider>
  );
}
