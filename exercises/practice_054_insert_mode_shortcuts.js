function processOrder(order) {
  if (order.status === "pending") {
    const total = calculateTotal(order.items);
    console.log("pending");
  }
}
