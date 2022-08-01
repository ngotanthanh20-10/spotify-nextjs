import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Dashboard from "../components/Dashboard";
import Loader from "../components/Loader";

const Home = () => {
  const router = useRouter();

  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/signin");
    },
  });

  if (status === "loading") return <Loader />;

  return (
    <div>
      <Head>
        <title>Spotify - Dashboard</title>
        <link rel="icon" href="/icon.svg.png" />
      </Head>

      <Dashboard />
    </div>
  );
};

export default Home;
