export class MockImageUtil {

  constructor() {}

  public static getImageToUse = (name: string) => {
    if (name.toLowerCase().includes('nevera')) {
      return 'nevera.png';
    } else if (name.toLowerCase().includes('estufa')) {
      return 'estufa.png';
    } else if (name.toLowerCase().includes('lavadora')) {
      return 'lavadora.png';
    } else if (name.toLowerCase().includes('microondas')) {
      return 'microondas.png';
    } else if (name.toLowerCase().includes('tv')) {
      return 'tv.png';
    } else { return 'generica.png'; }
  }
}
