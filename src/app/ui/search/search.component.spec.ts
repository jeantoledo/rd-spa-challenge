/* Não tive tempo de criar testes para todos os componentes da aplicação, mas ela está configurada para suporta-los */

import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;
    let debugElement: DebugElement;
    let nativeElement: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchComponent],
            imports: [FormsModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement.query(By.css('.search-field-input'));
        nativeElement = debugElement.nativeElement;
    });

    it('should bind placeholder value', () => { // Esse teste por exemplo verifica se a propriedade placeholder realmente está sendo utilizada onde deveria
        component.placeholder = 'teste placeholder';
        fixture.detectChanges();
        
        expect(nativeElement.attributes['placeholder'].nodeValue)
            .toEqual('teste placeholder', 'search placeholder should equal placeholder property');
    });
});
