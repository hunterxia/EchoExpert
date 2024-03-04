import Link from "next/link";
import Image from "next/image";
import AccountButton from "./Login";

export default function Header() {
  return (
    <header className="top-0 sticky z-20 w-full flex flex-row animate-in fade-in slide-in-from-top-4 duration-1000 ease-in-out bg-white">
      <Link className="items-left flex flex-row justify-center pt-4" href="/">
        <Image
          src="/Logo.png"
          alt="EchoExpert Logo"
          width={200}
          height={200}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Link>
      <AccountButton />
    </header>
  );
}
