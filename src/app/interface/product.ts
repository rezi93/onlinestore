export interface IProduct {
    
        

        id: number,
      title: string,
      price: number,
      category: string,
      description: string,
      image:string
}

export enum ICategory{
          ELECTRONICS="ELE",
          JEWELERY="jewelery",
          MEN= "men",
          WOMEN="women"
}
