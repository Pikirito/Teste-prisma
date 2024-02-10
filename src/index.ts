import { ProductServices } from "./Services/product.services";
import { StoreServices } from "./Services/store.services";

const storeServices = new StoreServices();

const productServices = new ProductServices();

async function ExempleController() {
  const response = await storeServices.create("EduStore");
  console.log(response);
}

async function ExempleController2() {
  const response = await storeServices.createMany([
    "JaoStore",
    "BoStore",
    "CatStore",
  ]);
  console.log(response);
}

async function ExempleController3() {
  const response = await productServices.create({
    name: "Carro de luxo",
    price: 2500000,
    description: "Cor de vinho",
    storeId: 1,
  });
  console.log(response);
}

async function ExempleController4() {
  const response = await storeServices.findOne(2);

  console.log(response);
}

async function ExempleController5() {
  const response = await storeServices.findMany(undefined, 2, 2);

  console.log(response);
}

async function ExempleController6() {
  const response = await storeServices.findOne(2);

  console.log(response);
}

async function ExempleController7() {
  const response = await storeServices.updateOne(1, { name: "PikasStorage" });

  console.log(response);
}

async function ExempleController8() {
  const response = await productServices.updateMany(2, {
    price: 4000,
  });

  console.log(response);
}

async function ExempleController9() {
  const response = await productServices.deleteOne(1);

  console.log(response);
}

async function ExempleController10() {
  const response = await storeServices.deleteMany("EduStore");

  console.log(response);
}

ExempleController10();
