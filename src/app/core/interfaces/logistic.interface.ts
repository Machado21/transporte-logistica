import { Double, ObjectId } from "mongodb";

export interface Logistic {
    _id?:ObjectId;
    nfe: string;
    operation: String;
    emissionDate: Date;
    suplier:{ //TODO Corrigir essa estrutura do banco -> salvar apenas uma FK de SUPLIER e RECEIVER.
        name: String;
        uf: String;
        cnpj: String
    }
    receiver:{
        name: String;
        uf: String;
        cnpj: String;
    }
    discount: number;
    totalProductValue: number;
    totalNfeValue: number;
    transporter: String;
    bulk: number;
    shipingOnAccount:boolean;
    products:[ObjectId]
    arrival_forecast: string;
    date_out: Date;
    note: string;
    pin_release: string;
    status: string;
}

export interface UserNote {
  readonly _id?: ObjectId;
  date: Date;
  note: string;
}