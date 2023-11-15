import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Empresa } from '../../../models/empresa.model';
import { EmpresaService } from '../../../services/empresa.service';

@Component({
  selector: 'ngx-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  creationMode: boolean = true;
  empresaNit: number=null;
  empresa : Empresa = {
    nit: null,
    nombre: "",
    direccion: "",
    telefono: null
  }

  sendingAttempt: boolean = false;

  constructor(private router: Router,
              private empresaServices: EmpresaService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.activatedRoute.snapshot.params.empresaNit){
      // Update mode
      this.creationMode = false;
      this.empresaNit = this.activatedRoute.snapshot.params.empresaNit;
      this.getEmpresa(this.empresaNit);
    }
    else{
      // Create mode
      this.creationMode = true;
    }
  }

  //Method to validate the mandatory data from the user form
  validateMandatoryData(): boolean{
    this.sendingAttempt = true;
    if(this.empresa.nombre == "" || this.empresa.direccion == "" || this.empresa.telefono == null || this.empresa.nit == null){
      return false;
    }
    else 
      return true;
  }

  
  // UPDATE
  // Method to get one empresa by id to UPDATE
  getEmpresa(nit: number): void{
    this.empresaServices.getOne(nit).subscribe(
      (data) => {
        this.empresa = data;
        this.creationMode = false;
      },
      (error) => {
        console.log(`Cannot access to the API: ${error.message}`);
      }
    )
  }

  // Method to update an existing empresa
  update(): void{
    if(this.validateMandatoryData()){
      let empresa_ : Empresa = {...this.empresa}
      this.empresaServices.update(empresa_, empresa_.nit).subscribe(
        (data) => {
          Swal.fire(
            'Empresa actualizada',
            'La empresa ha sido actualizada',
            'success'
          )
          this.router.navigate(['/pages/empresa/list']);
        },
        (error) => {         
          console.log(`Cannot access to the API: ${error.message}`);
          Swal.fire(
            'Error en el proceso',
            "Estamos teniendo problemas con el servidor, por favor intente más tarde",
            'error'
          )
        })
    }
    else{
      Swal.fire(
        'Datos incompletos',
        'Por favor ingrese todos los datos',
        'warning'
      )
    }
  }


  // CREATE
  // Method to create a new empresa
  create(): void{
    if(this.validateMandatoryData()){
      this.empresaServices.create(this.empresa).subscribe(
        (data) => {
          Swal.fire(
            'Empresa creada',
            'La empresa ha sido creada',
            'success'
          )
          this.router.navigate(['/pages/empresa/list']);
        },
        (error) => {
          console.log(`Cannot access to the API: ${error.message}`);
          Swal.fire(
            'Error en el proceso',
            "Estamos teniendo problemas con el servidor, por favor intente más tarde",
            'error'
          )
        })
    }
    else{
      Swal.fire(
        'Datos incompletos',
        'Por favor ingrese todos los datos',
        'warning'
      )
    }
  }

}
