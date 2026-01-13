import ClientComponent from "@/components/ClientComponent";
import ServerComponent from "@/components/ServerComponent";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold">hello world</h1>
      <ClientComponent />
      <ServerComponent />
    </>
  );
}
