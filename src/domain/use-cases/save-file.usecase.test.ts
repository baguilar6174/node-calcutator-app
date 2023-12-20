import fs from 'fs';
import { SaveFile } from './save-file.usecase';

describe('SaveFileUseCase', () => {

  const customOptions = {
    fileContent: 'custom content',
    fileDestination: 'custom-outputs',
    fileName: 'custom-name'
  }
  const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

  afterEach(()=>{
    const folderExists = fs.existsSync('outputs');
    if(folderExists) fs.rmSync('outputs', { recursive: true });

    const customFolderExists = fs.existsSync(customOptions.fileDestination);
    if(customFolderExists) fs.rmSync(customOptions.fileDestination, { recursive: true });
  });

  /* beforeEach(() => {
    jest.clearAllMocks();
  }); */

  test('should save file with default values', () => {
    const saveFile = new SaveFile();
    const filePath = 'outputs/table.txt';
    const options = {
      fileContent: 'test content'
    }
    const result = saveFile.execute(options);
    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8'});

    expect(result).toBe(true);
    expect(fileExists).toBeTruthy();
    expect(fileContent).toBe(options.fileContent);
  });

  test('should save file with custom values', () => {
    const saveFile = new SaveFile();
    const result = saveFile.execute(customOptions);
    const fileExists = fs.existsSync(customFilePath);
    const fileContent = fs.readFileSync(customFilePath, { encoding: 'utf-8'});

    expect(result).toBe(true);
    expect(fileExists).toBeTruthy();
    expect(fileContent).toBe(customOptions.fileContent);
  });

  test('should return false if directory could not be created', () => {
    const saveFile = new SaveFile();
    const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => {
      throw new Error('error')
    });
    const result = saveFile.execute(customOptions);
    expect(result).toBeFalsy();
    mkdirSpy.mockRestore();
  });

  test('should return false if file could not be created', () => {
    const saveFile = new SaveFile();
    const writeFileSyncSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {
      throw new Error('error')
    });
    const result = saveFile.execute(customOptions);
    expect(result).toBeFalsy();
    writeFileSyncSpy.mockRestore();
  });
});