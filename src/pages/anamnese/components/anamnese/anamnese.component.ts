import { Component, Injector, OnInit, ViewChild,  Input } from '@angular/core';
import { Extender } from '../../../../shared/helpers/extender';
import { IAnamnese } from '../../../../shared/models/anamnese';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-anamnese',
  templateUrl: './anamnese.component.html',
  styleUrls: ['./anamnese.component.scss']
})

export class AnamneseComponent extends Extender implements OnInit {

  @ViewChild('form') public form: NgForm;
  @Input() public input: IAnamnese[];
  public model: IAnamnese;
  public toggleAdd: boolean;


  constructor(protected injector: Injector) {
    super(injector);
  }

  public ngOnInit() {

    this.model = {
      phonenumber: null,
      emergencyphone: '',
      responsible: '',
  
      simdesmaia: null,
      naodesmaia: null,
      cardiaco: null,
      derrame: null,
      epilepsia: null,
      colesterolelevado: null,
      diabetico: null,
      asmatico: null,
      bronquite: null,
      enfisema: null,
      hipertenso: null,
      cancer: null,
      angina: null,
      disturbiotiroide: null,
      naopossui: null,
      outros: null,

      
      dornascostas:null,
      dornasarticulacoes:null,
      semsintomas:null,
  
      simmedicamento:null,
      naomedicamento:null,
  
      parentecardiaco:null,
      parentenaocardiaco:null,
  
      simfumante:null,
      naofumante: null,
  
      simpraticante:null,
      naopraticante:null,
  
      sono:null,
  
      simdescansado:null,
      naopdescansado:null,
  
      irritado:null,
      meioirritado:null,
      nuncairritado:null,
  
      mauhumor:null,
      meiomauhumor:null,
      nuncamauhumor:null,
  
      desanimado:null,
      meiodesanimado:null,
      nuncadesanimado:null,
  
      perderpeso:null,
      cardio:null,
  
      flexidade:null,
      hipertrofia:null,
      reduzirdornopeito:null,
      qualidadedevida:null,
      parardefumar:null,
      diminuircoleterol:null,
      controlediabetes:null,
      outrosmotivos:null,
    };
  };


  public saveanamnese() {
      this.afStore$
        .doc(`users/${this.auth$.user.uid}`)
        .collection('anamnese')
        .add(this.model)
        .then(() => {
          this.model = null;
          this.form.resetForm();
        });
    } 
  
}


