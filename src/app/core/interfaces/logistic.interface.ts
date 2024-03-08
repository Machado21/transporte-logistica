import { Double, ObjectId } from "mongodb";

export interface Logistic {
  _id?: ObjectId;
  nfe: String;
  operation: String;
  emission_date: Date;
  supplier: ObjectId;
  receiver: ObjectId;
  transporter: ObjectId;
  freight: Number;
  discount: Number;
  total_product_value: Number;
  total_note_value: Number;
  arrival_forecast: Date;
  date_out: Date;
  bulk: Number;
  shipping_on_account: boolean;
  merchandise: Array<ObjectId>;
  note: String;
  pin_release: Date;
  status: String;
}

export interface UserNote {
  readonly _id?: ObjectId;
  date: Date;
  note: string;
}
