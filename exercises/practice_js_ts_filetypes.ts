// Shared JavaScript/TypeScript practice source for filetype-dependent katas.

declare const cart: { items: number[] };
declare const currency: string;
declare const discount: number;
declare const user: { email: string };
declare function formatPrice(value: number, currencyCode: string): string;
declare function sumPrices(items: number[], discountValue: number): number;
declare function notify(address: string, message: string, options?: { urgent: boolean }): void;

// KATA 070 START
function kata070Total(items: number[]): number {
  return items.reduce((sum, item) => sum + item, 0);
}

function kata070FormatTotal(items: number[]): string {
    const value = kata070Total(items);
    return `Total: ${value}`;
}

const kata070Sample = [2, 4, 8];
console.log(kata070FormatTotal(kata070Sample));
// KATA 070 END

// KATA 073 START
function kata073Normalize(value: number): number {
  return value < 0 ? -value : value;
}

function kata073Report(raw: number): number {
  const kata073Cleaned = kata073Normalize(raw);
  return kata073Cleaned;
}
// KATA 073 END

// KATA 173 START
const total = formatPrice(sumPrices(cart.items, discount), currency);
notify(user.email, total, { urgent: false });
// KATA 173 END

// KATA 176 START
function kata176ComputeTotal(price: number, taxRate: number): number {
  return price * (1 + taxRate);
}

const kata176Subtotal = 99.99;
const kata176Tax = 0.08;
const kata176Total = kata176ComputeTotal(kata176Subtotal, kata176Tax);
const kata176DiscountedTotal = kata176ComputeTotal(kata176Subtotal * 0.9, kata176Tax);
// KATA 176 END

// KATA 178 START
function kata178Total(items){
return items.reduce((sum,item)=>sum+item.price,0)
}

const kata178Message = "format me"
// KATA 178 END

// KATA 180 START
const customerName = "Ada";
const customerEmail = "ada@example.test";
const customerStatus = "active";

cus

function kata180RenderCard() {
}
// KATA 180 END

// KATA 190 START
let kata190Output = "";

function kata190Render() {
  const kata190Local = String(42);
  return kata190Output;
}
// KATA 190 END

// KATA 191 START
function kata191CalculateTotal(price: number, taxRate: number): number {
  return price * (1 + taxRate);
}

const kata191Subtotal = 99.99;
const kata191Tax = 0.08;
const kata191Total = kata191CalculateTotal(kata191Subtotal, kata191Tax);
const kata191DiscountedTotal = kata191CalculateTotal(kata191Subtotal * 0.9, kata191Tax);
// KATA 191 END
