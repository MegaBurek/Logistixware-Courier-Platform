import { Package } from "./package";

export class Collection {
  uid : string;
  orderDate : Date;
  active : Boolean;
  shipperFullName : string;
  fullAddress : string;
  fullTelephoneNumber : string;
  alternativeNumber : string;
  contactPerson : string;
  alternativeContactPerson : string;
  packageDetails : Package;
  shipperCustomExporterCode : string;
  specialInstructions : string;
  readyTime : string;
  closingTime : string;
  receiverFullName : string;
  receiverPhysicalDeliveryAddress: string;
  receiverTelephoneNumber: string;
  contactPerson : string;
  receiverEmail : string;
  financedBy : string;
  accountNumber : string;
}
