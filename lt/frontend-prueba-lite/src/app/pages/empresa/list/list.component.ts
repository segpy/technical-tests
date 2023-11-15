import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';
import Swal from 'sweetalert2';
import { Empresa } from '../../../models/empresa.model';
import { EmpresaService } from '../../../services/empresa.service';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  columnNames : string[] = ['Nit', 'Nombre', 'Direccion', 'Telefono', 'Opciones', 'Articulos'];
  empresas: Empresa[];

  constructor(private router: Router,
              private empresaServices: EmpresaService) { }

  ngOnInit(): void {
    this.list();
  }

  list(): void{
    this.empresaServices.list().subscribe(
      (data) => {
        this.empresas = data;
      },
      (error) => {
        console.log(`Cannot access to the API: ${error.message}`);
      }
    )
  }

  create(): void{
    this.router.navigate(['/pages/empresa/create']);
  }

  update(id: number): void{
    this.router.navigate([`/pages/empresa/update/${id}`]);
  }

  delete(id: number): void{
    Swal.fire({
      title: 'Eliminar empresa',
      text: '¿Está seguro de eliminar la empresa?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      confirmButtonColor: '#3085d6',
    }).then((result) => {
      if (result.isConfirmed) {
        this.empresaServices.delete(id).subscribe(
          (data) => {
            Swal.fire(
              'Eliminado',
              'La empresa ha sido eliminada',
              'success'
            )
            this.ngOnInit();
          },
          (error) => {
            console.log(`Cannot access to the API: ${error.message}`);
            Swal.fire(
              "Error al eliminar",
              "No se pudo eliminar la empresa",
              "error"
              )
          }
        )
      }
    })
  }

  
  // ARTICLE
  // Method to navigate to the article list
  listArticle(empresaId: number, empresaNombre: string): void{
    this.router.navigate([`pages/articulo/list/${empresaId}/${empresaNombre}`]);
  }

}
