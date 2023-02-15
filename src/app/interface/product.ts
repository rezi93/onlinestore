export interface IProduct {
    
        

      //   id: number,
      // title: string,
      // price: number,
      // category: string,
      // description: string,
      // image:string

      id: number,
      title: string,
      description: string,
      price: number,
      discountPercentage: number,
      rating: number,
      stock: number,
      brand: string,
      category: string,
      thumbnail: string,
      images: string[]
}

export enum ICategory{
          ELECTRONICS="ELE",
          JEWELERY="jewelery",
          MEN= "men",
          WOMEN="women"
}

export interface IBaseResponsive{
  total: number,
  skip: number,
  limit: number,
  products:IProduct[]
}
