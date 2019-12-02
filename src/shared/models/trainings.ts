export interface ITrainings {
  id: string;
  title: string;
  status: boolean;
  uid: string;
  exercicios: IDrills[];
}
export interface IDrills {
  title: string;
  status: boolean;
  repeticoes:number;
  series:number;
  pausa:number;
}