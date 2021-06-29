// Refatore a função abaixo para tulizar switch/case

// NOTAS
// abaixo de 10: PÉSSIMO
// entre 11 e 30: RUIM
// entre 31 e 50: REGULAR
// entre 51 e 70: MEDIANO
// entre 71 e 90: ÓTIMO
// acima de 91: EXCELENTE

function studentSituation(studentNote) {
  if (studentNote < 10) {
    return 'PÉSSIMO';
  } else if (studentNote >= 11 && studentNote <= 30) {
    return 'RUIM';
  } else if (studentNote >= 31 && studentNote <= 50) {
    return 'REGULAR';
  } else if (studentNote >= 51 && studentNote <= 70) {
    return 'MEDIANO';
  } else if (studentNote >= 71 && studentNote <= 90) {
    return 'ÓTIMO';
  } else {
    return 'EXCELENTE';
  }
}