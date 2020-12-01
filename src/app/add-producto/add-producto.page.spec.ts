import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddProductoPage } from './add-producto.page';

describe('AddProductoPage', () => {
  let component: AddProductoPage;
  let fixture: ComponentFixture<AddProductoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
