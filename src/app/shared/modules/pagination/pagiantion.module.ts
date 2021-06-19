import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { UtilService } from '../../services/util.service';
import {PaginationComponent} from './components/pagination/pagination.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
  providers: [UtilService]
})
export class PaginationModule {}
