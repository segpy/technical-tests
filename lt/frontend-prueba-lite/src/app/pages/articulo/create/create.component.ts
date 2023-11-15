import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'console';
import Swal from 'sweetalert2';
import { Articulo } from '../../../models/articulo.model';
import { Empresa } from '../../../models/empresa.model';
import { ArticuloService } from '../../../services/articulo.service';
import { EmpresaService } from '../../../services/empresa.service';

@Component({
  selector: 'ngx-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  creationMode: boolean = true;
  articuloId: number;
  articulo: Articulo = {
    id: null,
    nombre: "",
    descripcion: "",
    empresa: null
  }

  empresas: Empresa[];
  sendingAttempt: boolean = false;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private articuloService: ArticuloService,
              private empresaService: EmpresaService) { }

  ngOnInit(): void {
    this.getEmpresas();
    if(this.activatedRoute.snapshot.params.articuloId){
      // Update mode
      this.creationMode = false;
      this.articuloId = this.activatedRoute.snapshot.params.articuloId;
      this.getArticulo();
    }
    else{
      // Create mode
      this.creationMode = true;
    }
  }

  validateMandatoryData(): boolean{
    this.sendingAttempt = true;
    if(this.articulo.nombre == "" || this.articulo.descripcion == "" || this.articulo.empresa == null){
      return false;
    }
    else return true;
  }

  getEmpresas(){
    this.empresaService.list().subscribe(
      (empresas: Empresa[]) => {
        this.empresas = empresas;
      },
      (error) => {
        console.log(error);
      });
  }

  //UPDATE
  getArticulo(){
    this.articuloService.getOne(this.articuloId).subscribe(
      (articulo: Articulo) => {
        this.articulo = articulo;
      },
      (error) => {
        console.log(error);
      });
  }

  update(){
    if(this.validateMandatoryData()){
      let articulo_ : Articulo = {...this.articulo};
      this.articuloService.update(articulo_, articulo_.id).subscribe(
        (data) => {
          Swal.fire({
            title: 'Articulo actualizado',
            text: `Articulo se actualizo con éxito`,
            icon: 'success',
          })
          this.empresaService.getOne(articulo_.empresa).subscribe(
            (empresa) => {
              this.router.navigate([`pages/articulo/list/${articulo_.id}/${empresa.nombre}`]);
            }
          );
        },
        (error) => {
          Swal.fire({
            title:"Error en el proceso",
            text:"Estamos presentando inconvenientes. Por favor, intente mas tarde",
            icon: "error", 
          })
        });
    }
    else
    {
      Swal.fire({
        title:"Campos obligatorios",
        text:"Por favor, verifique los datos ingresados",
        icon: "warning", 
      })
    }
  }

  //CREATE
  create(){
    if(this.validateMandatoryData()){
      let articulo_ : Articulo = {...this.articulo};
      console.log(articulo_);
      
      this.articuloService.create(articulo_).subscribe(
        (data) => {
          Swal.fire({
            title: 'Articulo creado',
            text: `Articulo se creo con éxito`,
            icon: 'success',
          })
          this.empresaService.getOne(articulo_.empresa).subscribe(
            (empresa) => {
              this.router.navigate([`pages/articulo/list/${empresa.nit}/${empresa.nombre}`]);
            }
          );
        },
        (error) => {
          
          Swal.fire({
            title:`Error en el proceso`,
            text:`${error.error.id.join(' ')}`,
            icon: "error", 
          })
        });
    }
    else
    {
      Swal.fire({
        title:"Campos obligatorios",
        text:"Por favor, verifique los datos ingresados",
        icon: "warning", 
      })
    }
  }

}
