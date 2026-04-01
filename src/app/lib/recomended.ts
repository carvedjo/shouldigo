type DadosClima = {
  temperatura: number
  vento: number
  precipitacao: number
  humidade: number
}

type DadosAr = {
  pm25: number
  pm10: number
  aqi: number
}

type Recomendacao = {
  semaforo: 'verde' | 'amarelo' | 'vermelho'
  titulo: string
  descricao: string
  qualidadeAr: string
}

function getQualidadeAr(aqi: number): string {
  if (aqi <= 20) return 'Excelente'
  if (aqi <= 40) return 'Bom'
  if (aqi <= 60) return 'Razoável'
  if (aqi <= 80) return 'Fraco'
  if (aqi <= 100) return 'Mau'
  return 'Muito má'
}

function getRecomendacao(clima: DadosClima, ar: DadosAr): Recomendacao {
  const qualidadeAr = getQualidadeAr(ar.aqi)

  if (ar.aqi > 100 || clima.precipitacao > 5 || clima.vento > 50) {
    return {
      semaforo: 'vermelho',
      titulo: 'Péssimo',
      descricao: 'Condições adversas. Evita atividade ao ar livre.',
      qualidadeAr,
    }
  }

  if (ar.aqi > 50 || clima.precipitacao > 1 || clima.vento > 30) {
    return {
      semaforo: 'amarelo',
      titulo: 'Cuidado',
      descricao: 'Condições razoáveis. Evita atividade intensa.',
      qualidadeAr,
    }
  }

  return {
    semaforo: 'verde',
    titulo: 'Ótimo',
    descricao: 'Boas condições para atividade ao ar livre.',
    qualidadeAr,
  }
}

export default getRecomendacao