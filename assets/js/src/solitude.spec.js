import { Solitude } from './solitude';

describe('Solitude Class', () => {
    'use strict';

    let solitude;

    beforeEach(() => {
        solitude = new Solitude();
    });

    afterEach(() => {
        solitude = undefined;
    });

    it('should set the theme name by default', () => {
        expect(solitude.name).toBe('Solitude');
    });

    it('should set the version to 1.0.0 by default', () => {
        expect(solitude.version).toBe('1.0.0');
    });
});