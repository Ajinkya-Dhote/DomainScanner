import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandExecutorComponent } from './command-executor.component';

describe('CommandExecutorComponent', () => {
  let component: CommandExecutorComponent;
  let fixture: ComponentFixture<CommandExecutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommandExecutorComponent]
    });
    fixture = TestBed.createComponent(CommandExecutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
