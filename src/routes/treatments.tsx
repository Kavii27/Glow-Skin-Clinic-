import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/treatments")({
  component: TreatmentsLayout,
});

function TreatmentsLayout() {
  return <Outlet />;
}
