import { Suspense } from "react";
import Campuslife from "@/components/Campuslife";
import { Suspense } from "react";

export default function CampusLifePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Campuslife />
    </Suspense>
  );
}
