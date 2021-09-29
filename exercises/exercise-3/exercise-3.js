let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let orderReceipt = function (orderArr) {
  console.log("QTY     ITEM       TOTAL");
  let grandTotal = 0;
  orderArr.map((item) => {
    let { itemName, quantity, unitPrice } = item;
    let individualTotalPrice = quantity * unitPrice;
    console.log(
      ` ${quantity}   ${itemName}    ${individualTotalPrice.toFixed(2)}`
    );
    grandTotal += individualTotalPrice;
  });
  console.log(`Total  £${grandTotal}`);
};
orderReceipt(order);
