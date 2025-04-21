// En caso de necesitar la implementación del FetchAPI
import "whatwg-fetch"; // <-- yarn add whatwg-fetch

// Hacer que las funciones de Jest estén disponibles globalmente
import { expect, jest, describe, test } from '@jest/globals';

// Exponer las funciones de Jest como variables globales
globalThis.expect = expect;
globalThis.jest = jest;
globalThis.describe = describe;
globalThis.test = test;
globalThis.it = test; // 'it' es un alias para 'test'
