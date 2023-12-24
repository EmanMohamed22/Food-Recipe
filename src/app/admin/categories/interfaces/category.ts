

  export interface Icategory{
    id:string;
    name:string;
    creationDate:number;
    modificationDate:number;
   }
  export interface ItableCategory{
    pageSize:number;
pageNumber:number;
totalNumberOfPages: number;
totalNumberOfRecords:number;
    data:Icategory[]
   }

