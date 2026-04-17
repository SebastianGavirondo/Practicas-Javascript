let monto = 200;

if (monto >= 100 && monto < 200) {
  console.log("Descuento del 10%");
  descuento = monto * 0.1;
  montoDesc = monto - descuento;
  console.log("Valor con el dfescuento aplicado:" + montoDesc);
} else if (monto >= 200) {
  descuento = monto * 0.25;
  montoDesc = monto - descuento;
  console.log("Descuento del 25%: $-" + descuento);
  console.log("Valor con el descuento aplicado: $" + montoDesc);
}
