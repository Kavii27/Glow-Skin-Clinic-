import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import {
  initialAppointments,
  initialTreatments,
  type Appointment,
  type Treatment,
} from "./clinic";

type ClinicContextValue = {
  treatments: Treatment[];
  appointments: Appointment[];
  addTreatment: (treatment: Omit<Treatment, "id">) => void;
  updateTreatment: (id: string, treatment: Omit<Treatment, "id">) => void;
  deleteTreatment: (id: string) => void;
  setAppointmentStatus: (id: string, status: Appointment["status"]) => void;
};

const ClinicContext = createContext<ClinicContextValue | null>(null);

export function ClinicProvider({ children }: { children: ReactNode }) {
  const [treatments, setTreatments] = useState<Treatment[]>(initialTreatments);
  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);

  const value = useMemo<ClinicContextValue>(
    () => ({
      treatments,
      appointments,
      addTreatment: (treatment) =>
        setTreatments((prev) => [
          { ...treatment, id: `t-${Math.random().toString(36).slice(2, 8)}` },
          ...prev,
        ]),
      updateTreatment: (id, treatment) =>
        setTreatments((prev) =>
          prev.map((item) => (item.id === id ? { ...treatment, id } : item)),
        ),
      deleteTreatment: (id) => setTreatments((prev) => prev.filter((item) => item.id !== id)),
      setAppointmentStatus: (id, status) =>
        setAppointments((prev) =>
          prev.map((item) => (item.id === id ? { ...item, status } : item)),
        ),
    }),
    [treatments, appointments],
  );

  return <ClinicContext.Provider value={value}>{children}</ClinicContext.Provider>;
}

export function useClinic() {
  const context = useContext(ClinicContext);
  if (!context) throw new Error("useClinic must be used within ClinicProvider");
  return context;
}
