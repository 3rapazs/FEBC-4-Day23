import { mProduct } from "../model/mProduct";

export class ProductController {

    public GetAll(): mProduct[] {
        let entityCollection = [];
        let entity = new mProduct();
        let id = 1;
        for (let i = 0; i < 60; i++) {
            entity = new mProduct();
            entity.id = id;
            entity.name = `รายการที่ ${id}`
            entity.image = id.toString();
            entity.price = 10000;
            entity.description = `คำอธิบายสินค้า รายการที่ ${id}`
            entity.note = [`1.คำอธิบาย/รายการที่ ${id}`,`2.คำอธิบาย/รายการที่ ${id}`,`3.คำอธิบาย/รายการที่ ${id}`,`4.คำอธิบาย/รายการที่ ${id}`,`5.คำอธิบาย/รายการที่ ${id}`]
            entity.stockMax = 100;
            entity.stock = 70
            entity.reviewName = ["User1","User2","User3"]
            entity.reviews = [`สินค้า ${entity.name} ใช้ดีมาก(1)`,`สินค้า ${entity.name} ใช้ดีมาก(2)`,`สินค้า ${entity.name} ใช้ดีมาก(3)`]

            entityCollection.push(entity);

            id += 1;
        } 
        return  entityCollection;
    }


    public GetRecord(id : number): mProduct {
        let entityCollection = this.GetAll();  
        return  entityCollection.find(t=>t.id === id);
    }


    // function printHello(): void {
    //     console.log('Hello!');
    //   }

    // function GetAll(): mProduct[] {
    //     let entityCollection = [];
    //     let entity = new mProduct();
    //     let id = 1;
    //     for (let i = 0; i < 50; i++) {
    //         entity = new mProduct();
    //         entity.id = id;
    //         entity.name = `รายการที่ ${id}`
    //         entity.image = id.toString();
    //         entity.price = Math.floor(Math.random() * 10000);
    //         entityCollection.push(entity);
    //         id += 1;
    //     } 
    //     return  entityCollection;
    // }





}