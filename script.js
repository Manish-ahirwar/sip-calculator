
document.getElementById('risk').addEventListener('change', function () {
  const riskLevel = this.value;
  const returnInput = document.getElementById('return');

  if (riskLevel === 'Conservative') returnInput.value = 6;
  if (riskLevel === 'Moderate') returnInput.value = 10;
  if (riskLevel === 'Aggressive') returnInput.value = 15;
});

function calculateSIP() {
  const monthly = parseFloat(document.getElementById('monthly').value);
  const years = parseFloat(document.getElementById('duration').value);
  const rate = parseFloat(document.getElementById('return').value);

  const n = years * 12;
  const r = rate / 100 / 12;

  const maturity = monthly * ((Math.pow(1 + r, n) - 1) * (1 + r)) / r;
  const invested = monthly * n;
  const returns = maturity - invested;

  document.getElementById('invested').textContent = invested.toFixed(2);
  document.getElementById('returns').textContent = returns.toFixed(2);
  document.getElementById('maturity').textContent = maturity.toFixed(2);
}
