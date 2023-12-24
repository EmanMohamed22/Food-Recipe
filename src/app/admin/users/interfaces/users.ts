
export interface IGroup {
    id:number;
    name:string;
    creationDate:number;
    modificationDate:number;
}

export interface IUsers{
    id:number;
    userName: string,
      email: string,
      country: string,
      phoneNumber:string,
      imagePath: null,
      creationDate:number;
    modificationDate:number;
    group:IGroup
   }
  export interface ITableUsers{
    pageSize:number;
    pageNumber:number;
    totalNumberOfPages: number;
    totalNumberOfRecords:number;
    data:IUsers
   }
