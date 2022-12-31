"use client";
import type { AppType } from "next/app";
import { trpc } from "../pages/trpc";

const TrpcWrapper = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default trpc.withTRPC(MyApp);
