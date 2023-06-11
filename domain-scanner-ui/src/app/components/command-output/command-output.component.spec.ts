import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandOutputComponent } from './command-output.component';

describe('CommandOutputComponent', () => {
  let component: CommandOutputComponent;
  let fixture: ComponentFixture<CommandOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommandOutputComponent]
    });
    fixture = TestBed.createComponent(CommandOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
