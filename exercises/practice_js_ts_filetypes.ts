// Shared JavaScript/TypeScript practice source for filetype-dependent katas.

// KATA 173 START
const total = formatPrice(sumPrices(cart.items, discount), currency);
notify(user.email, total, { urgent: false });
// KATA 173 END

// KATA 178 START
function total(items){
return items.reduce((sum,item)=>sum+item.price,0)
}

const message = "format me"
// KATA 178 END

// KATA 070 START
function total(items: number[]): number {
  return items.reduce((sum, item) => sum + item, 0);
}

function formatTotal(items: number[]): string {
    const value = total(items);
    return `Total: ${value}`;
}

const sample = [2, 4, 8];
console.log(formatTotal(sample));
