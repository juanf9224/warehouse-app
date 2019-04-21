import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

export interface DialogData {
  quantity: number;
}

@Component({
  selector: 'app-dialog',
  template: `
    <h1 mat-dialog-title>Cantidad</h1>
    <div mat-dialog-content>
      <p>Que cantidad deseas agregar al carrito?</p>
      <mat-form-field>
        <input type="number" matInput [(ngModel)]="data.quantity">
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Ninguno</button>
      <button mat-button [mat-dialog-close]="data.quantity" cdkFocusInitial>Ok</button>
    </div>
  `
})
export class DialogUtilComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogUtilComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close(0);
  }

}
