type ApprovalStatus = "Pending" | "Approved" | "Rejected";

export interface Event {
  _id: string;
  name: string;
  organizer_id: string;
  hall_id: string;
  start_date: string; // ISO date string
  end_date: string; // ISO date string
  approval_status: ApprovalStatus;
  is_deleted: boolean;
  rating: number;
  year: number;
  img: string;
}

export interface EventResponse {
  message: string;
  data: Event[];
}
