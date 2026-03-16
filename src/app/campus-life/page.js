import { Suspense } from "react";
import Campuslife from "@/components/Campuslife";

export default function CampusLifePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Campuslife />
    </Suspense>
  );
}
