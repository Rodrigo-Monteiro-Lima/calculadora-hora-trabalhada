const horasDiarias = document.querySelector('#horas-diarias');
const diasMes = document.querySelector('#dias-mes');
const despesas = document.querySelector('#despesas');
const equipamento = document.querySelector('#equipamento');
const resultado = document.querySelector('#valor-total');
const hidden = document.querySelector('#resultado');
const btn = document.querySelector('#calcular');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (
    horasDiarias.value === '' ||
    diasMes.value === '' ||
    despesas.value === ''
  ) {
    alert('Preencha os campos vazios!!');
  } else {
    const equipamentoMes = Number(equipamento.value) / 12;
    const despesasTotais = Number(despesas.value) + equipamentoMes;
    const horasMes = Number(horasDiarias.value) * Number(diasMes.value);
    const valorHora = (despesasTotais / horasMes / 0.5).toFixed(2);
    hidden.classList.remove('hidden');
    resultado.innerHTML = `R$ ${valorHora}`;
  }
});
