// Refatore a função abaixo para tulizar switch/case

// NOTAS
// abaixo de 10: PÉSSIMO
// entre 11 e 30: RUIM
// entre 31 e 50: REGULAR
// entre 51 e 70: MEDIANO
// entre 71 e 90: ÓTIMO
// acima de 91: EXCELENTE

function studentSituation(studentNote) {
  const bool = true;
  switch (bool) {
    case (studentNote < 10):
      return 'PÉSSIMO'  
    case (studentNote <= 30):
      return 'RUIM';
    case (studentNote <= 50):
      return 'REGULAR';
    case (studentNote <= 70):
      return 'MEDIANO';
    case (studentNote <= 90):
      return 'ÓTIMO';
    default:
      return 'EXCELENTE'
  }
}

console.log(studentSituation(1));