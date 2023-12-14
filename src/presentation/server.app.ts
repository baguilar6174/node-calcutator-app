import { CreateTable } from "../domain/use-cases/create-table.usecase.js";
import { SaveFile } from "../domain/use-cases/save-file.usecase.js";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  fileName: string;
  fileDestination: string;
}

export class ServerApp {
  static run(options: RunOptions) {
    console.log("Server running...");
    const { base, limit, showTable, fileDestination, fileName } = options;
    const table = new CreateTable().execute({ base, limit });
    const wasCreated = new SaveFile().execute({ fileContent: table, fileName, fileDestination })
    if (showTable) console.log(table);
    if (wasCreated) console.log("File created!");
  }
}