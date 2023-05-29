/*electricitybill*/
let name = prompt(`enter your name`)
let bulb = parseInt(prompt(`enter the number of Bulbs in your house`));
let fan = parseInt(prompt(`enter the number of Fans in your house`));
let ac = parseInt(prompt(`enter the number of AC in your house`));
let pump = parseInt(prompt(`enter the number of Power Pump in your house`));

let totalEnergyConsuming = (bulb*3 + fan*5 + ac*10 + pump*2)*5
document.write("<h2>"+`${name} Your Electricity Bill is ${totalEnergyConsuming} TK`+"</h2>")
