import Link from "next/link";
import Image from "next/image";

const WhatsAppButton = () => {
  const whatsappLink = "https://walink.co/9938a1";

  return (
    <div className="whatsapp-button">
      <Link href={whatsappLink} target="_blank">
        <Image
          src="/images/wsp.png"
          alt="WhatsApp"
          width={100}
          height={100}
          className="whatsapp-image md:w-[80px] w-[50px] cursor-pointer]"
        />
      </Link>
    </div>
  );
};

export default WhatsAppButton;
