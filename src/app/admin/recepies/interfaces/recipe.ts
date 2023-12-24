export interface ITag {
    id:number;
    name:string;
    creationDate:number;
    modificationDate:number;
}
export interface ICategory {
    id:number;
    name:string;
    creationDate:number;
    modificationDate:number;
}
export interface IRecipe{
    id:number;
    imagePath:string;
    name:string;
    
    description:string;
    creationDate:number;
    modificationDate:number;
    price:number;
    category:ICategory[]
    tag:ITag
   }
  export interface ITableRecipe{
    pageSize:number;
    pageNumber:number;
    totalNumberOfPages: number;
    totalNumberOfRecords:number;
    data:IRecipe[]
   }
