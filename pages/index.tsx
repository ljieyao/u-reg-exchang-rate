import type { NextPage } from "next";
import { useRouter } from "next/router";

const HomePage: NextPage = () => {
  const router = useRouter();

  void router.replace("/landing");

  return null;
};

export default HomePage;
