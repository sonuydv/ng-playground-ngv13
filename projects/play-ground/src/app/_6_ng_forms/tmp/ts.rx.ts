

declare type receiver<T> = (value:T)=>void

export class TsRxSubject<T>{

  clients = new Map<string,receiver<T>>()

  subscribe(id: string, receiver: (value:T)=>void){
   this.clients.set(id,receiver)
  }


  deliver(id:string,value: T){
   this.clients.get(id)!(value)
  }

}


