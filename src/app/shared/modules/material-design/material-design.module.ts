import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatGridListModule,
  MatListModule,
  MatInputModule,
  MatToolbarModule,
  MatBadgeModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatDialogModule
} from '@angular/material';

import { ScrollingModule, ScrollDispatchModule } from '@angular/cdk/scrolling';

@NgModule({
    imports: [
      MatButtonModule,
      MatMenuModule,
      MatCardModule,
      MatIconModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatGridListModule,
      MatListModule,
      MatInputModule,
      MatToolbarModule,
      MatBadgeModule,
      MatFormFieldModule,
      ScrollingModule,
      ScrollDispatchModule,
      MatSnackBarModule,
      MatDialogModule
    ],
    exports: [
      MatButtonModule,
      MatMenuModule,
      MatCardModule,
      MatIconModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatGridListModule,
      MatListModule,
      MatInputModule,
      MatToolbarModule,
      MatBadgeModule,
      MatFormFieldModule,
      ScrollingModule,
      ScrollDispatchModule,
      MatSnackBarModule,
      MatDialogModule
    ]
})
export class MaterialDesignCustomModule {}
