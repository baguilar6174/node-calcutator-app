import fs from 'fs';

export interface SaveFileOptions {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}

export interface SaveFileUseCase {
  execute: (options: SaveFileOptions) => boolean;
}

export class SaveFile implements SaveFileUseCase {
  
  constructor(
    // repository
  ){}

  execute(options: SaveFileOptions){
    const { fileContent, fileDestination = `outputs`, fileName = `table` } = options;
    try {
      fs.mkdirSync(fileDestination, { recursive: true});
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
      return true;
    } catch (error) {
      console.error("Error", error);
      return false;
    }
  };

}