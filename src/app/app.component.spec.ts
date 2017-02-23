import {expect} from 'chai';
//import jsdom from 'jsdom';
//import fs from 'fs';

describe('simple test example', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

/*describe('DOM interaction test example', () => {
    it('should say hello', (done) => {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, (err, window) => {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal('Starter Javascript Development Enviroment');
            done();
            window.close();
        });
    });
});*/
