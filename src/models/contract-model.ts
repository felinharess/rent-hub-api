export interface Contract {
  id: number;
  tenantId: number;
  propertyId: number;
  startDate: string;
  endDate: string;
  monthlyRent: number;
  dueDay: number;
  status: ContractStatus;
  createdAt: string;
}
export type ContractStatus =
  | "ACTIVE"
  | "FINISHED"
  | "CANCELED"
  | "PENDING";