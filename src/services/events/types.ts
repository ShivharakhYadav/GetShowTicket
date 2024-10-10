type ApprovalStatus = "Pending" | "Approved" | "Rejected";

export interface Event {
  event_name: string;
  organizer_id: string;
  hall_id: string;
  start_date: Date;
  end_date: Date;
  approval_status: ApprovalStatus;
  licence_document?: string;
  hall_permit_document?: string;
  is_deleted?: boolean;
}
