import { ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { SvgIconComponent } from './svg-icon.component';

describe('SvgIconComponent', () => {
  let component: SvgIconComponent;
  let fixture: ComponentFixture<SvgIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgIconComponent],
    }).compileComponents();
  });

  describe('General', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(SvgIconComponent);
      component = fixture.componentInstance;
      component.fill = 'ApplaudoNavyBlue';
      component.icon = 'account';
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should render a div with id "iconContainer"', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#iconContainer')).toBeTruthy();
    });

    it('should render svg', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('svg')).toBeTruthy();
    });

    it('should iconContainer div has a one child', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#iconContainer').childNodes.length).toBe(1);
    });

    it('should iconContainer div has a one svg', () => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#iconContainer').childNodes.length).toBe(1);
      expect(compiled.querySelector('#iconContainer').childNodes[0].nodeName).toBe('svg');
    });
  });

  describe('Class Color Tests', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(SvgIconComponent);
      fixture.componentInstance.icon = 'account';
    });

    it('should the fill property is ApplaudoNavyBlue then the iconContainer div has a class name applaudo-navy-blue', () => {
      fixture.componentInstance.fill = 'ApplaudoNavyBlue';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#iconContainer').getAttribute('class')).toBe('applaudo-navy-blue');
    });

    it('should the fill property is ApplaudoRed then the iconContainer div has a class name applaudo-red', () => {
      fixture.componentInstance.fill = 'ApplaudoRed';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#iconContainer').getAttribute('class')).toBe('applaudo-red');
    });

    it('should the fill property is LightGray then the iconContainer div has a class name light-gray', () => {
      fixture.componentInstance.fill = 'LightGray';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#iconContainer').getAttribute('class')).toBe('light-gray');
    });

    it('should the fill property is White then the iconContainer div has a class name white', () => {
      fixture.componentInstance.fill = 'White';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#iconContainer').getAttribute('class')).toBe('white');
    });

    it('should the fill property is ApplaudoRedPlus then the iconContainer div has a class name applaudo-red-plus', () => {
      fixture.componentInstance.fill = 'ApplaudoRedPlus';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#iconContainer').getAttribute('class')).toBe('applaudo-red-plus');
    });

    it('should the fill property is ApplaudoRedMinus then the iconContainer div has a class name applaudo-red-minus', () => {
      fixture.componentInstance.fill = 'ApplaudoRedMinus';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#iconContainer').getAttribute('class')).toBe('applaudo-red-minus');
    });

    it('should the fill property is ErrorRed then the iconContainer div has a class name error-red', () => {
      fixture.componentInstance.fill = 'ErrorRed';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#iconContainer').getAttribute('class')).toBe('error-red');
    });

    it('should the fill property is Green then the iconContainer div has a class name green', () => {
      fixture.componentInstance.fill = 'Green';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#iconContainer').getAttribute('class')).toBe('green');
    });

    it('should the fill property is MidGray then the iconContainer div has a class name mid-gray', () => {
      fixture.componentInstance.fill = 'MidGray';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#iconContainer').getAttribute('class')).toBe('mid-gray');
    });

    it('should the fill property is Yellow then the iconContainer div has a class name yellow', () => {
      fixture.componentInstance.fill = 'Yellow';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#iconContainer').getAttribute('class')).toBe('yellow');
    });

    it('should the fill property is Charcoal then the iconContainer div has a class name charcoal', () => {
      fixture.componentInstance.fill = 'Charcoal';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#iconContainer').getAttribute('class')).toBe('charcoal');
    });

    it('should the fill property is CoolGray then the iconContainer div has a class name cool-gray', () => {
      fixture.componentInstance.fill = 'CoolGray';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#iconContainer').getAttribute('class')).toBe('cool-gray');
    });

    it('should the fill property is Platinum then the iconContainer div has a class name platinum', () => {
      fixture.componentInstance.fill = 'Platinum';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#iconContainer').getAttribute('class')).toBe('platinum');
    });

    it('should the fill property is ApplaudoPurple then the iconContainer div has a class name applaudo-purple', () => {
      fixture.componentInstance.fill = 'ApplaudoPurple';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#iconContainer').getAttribute('class')).toBe('applaudo-purple');
    });

    it('should the fill property is Blue then the iconContainer div has a class name blue', () => {
      fixture.componentInstance.fill = 'Blue';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#iconContainer').getAttribute('class')).toBe('blue');
    });

    it('should the fill property is Bronze then the iconContainer div has a class name bronze', () => {
      fixture.componentInstance.fill = 'Bronze';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#iconContainer').getAttribute('class')).toBe('bronze');
    });

    it('should the fill property is LightNavyBlue then the iconContainer div has a class name light-navy-blue', () => {
      fixture.componentInstance.fill = 'LightNavyBlue';
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#iconContainer').getAttribute('class')).toBe('light-navy-blue');
    });
  });

  describe('Height and width Tests', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(SvgIconComponent);
      fixture.componentInstance.fill = 'ApplaudoNavyBlue';
      fixture.componentInstance.icon = 'account';
    });

    it('should the height property is set to 60 then the iconContainer div has a height of 60', () => {
      fixture.componentInstance.height = 60;
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('svg').getAttribute('height')).toBe('60px');
    });

    it('should the width property is set to 60 then the iconContainer div has a width of 60', () => {
      fixture.componentInstance.width = 60;
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('svg').getAttribute('width')).toBe('60px');
    });
  });
});
