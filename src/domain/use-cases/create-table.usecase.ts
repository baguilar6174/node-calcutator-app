export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export interface CreateTableUseCase {
  execute: (options:CreateTableOptions ) => string;
}

export class CreateTable implements CreateTableUseCase {
  constructor(
    // Dependency injection
  ){}

  execute({base, limit = 10} : CreateTableOptions){
    let data:string = "";
    for (let i = 1; i <= limit; i++) {
      data+=`${base} x ${i} = ${base*i}\n`;
    }
    return data;
  }
}