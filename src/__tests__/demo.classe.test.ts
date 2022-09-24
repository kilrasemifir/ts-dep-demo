import { DemoClass } from '../demo.classe';

describe('DemoClasser', () => {
    const demoClass = new DemoClass();
    it('should return 3', () => {
        expect(demoClass.addition(1, 2)).toBe(3);
    });
});