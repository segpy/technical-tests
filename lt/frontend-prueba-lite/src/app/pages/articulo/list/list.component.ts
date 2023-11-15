import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Articulo } from '../../../models/articulo.model';
import { Empresa } from '../../../models/empresa.model';
import { ArticuloService } from '../../../services/articulo.service';
import { EmpresaService } from '../../../services/empresa.service';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  columnNames : string[] = ['id', 'Nombre', 'Descripcion', 'Empresa', 'Opciones'];
  articulos : Articulo[];
  empresaNit: number;
  empresaNombre: string;

  constructor(private router: Router,
              private articuloService: ArticuloService,
              private empresaService: EmpresaService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.empresaNit = params.empresaId;
        this.empresaNombre = params.empresaNombre;
      }
    )
    this.list();
  }

  getEmpresas(id: number): string {
    let empresa = "";
    this.empresaService.getOne(id).subscribe(
      data => {empresa = data.nombre},
      error => console.log(`Cannot access to the API: ${error.message}`)
      );
    return empresa;
  }

  list(): void {
    this.articuloService.listByEmpresa(this.empresaNit).subscribe(
      data => {
        this.articulos = data;
      },
      error => {
        console.log(`Cannot access to the API: ${error.message}`);
      }
    );
  }

  create(): void {
    this.router.navigate(['pages/articulo/create']);
  }

  update(id: number): void {
    this.router.navigate([`pages/articulo/update/${id}`]);
  }

  delete(id: number): void {
    Swal.fire({
      title: "Eliminar Articulo",
      text: "¿Está seguro de eliminar el articulo?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.articuloService.delete(id).subscribe(
          data => {
            Swal.fire(
              "Articulo eliminado",
              `Articulo eliminado con éxito`,
              "success"
            );
            this.ngOnInit();
          },
          error => {
            Swal.fire(
              "Error al eliminar",
              "No se pudo eliminar el articulo",
              "error"
            );
          }
        );
      }
    })
  }

}
