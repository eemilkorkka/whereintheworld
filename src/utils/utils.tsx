export type Country = {
  name: string,
  population: number,
  region: string,
  capital?: string[],
}

export const formatCapitals = (capitals: string[]): string => {
    return capitals.join(', ');
}