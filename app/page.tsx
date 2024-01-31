"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNavigate = () => {
    window.location.href = "/home";
  };
  return (
    <main className="h-screen flex items-center justify-center">
      <Card>
        <CardHeader>Home</CardHeader>
        <CardContent>
          <Button onClick={handleNavigate}>Enter App</Button>
        </CardContent>
      </Card>
    </main>
  );
}
