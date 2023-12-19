import { CreateTable } from './create-table.usecase';

describe('CreateTableUseCase', () => {
  test('should create table with default values', () => {
    const createTable = new CreateTable();
    const table = createTable.execute({ base: 2 });
    expect(createTable).toBeInstanceOf(CreateTable);
    expect(table).toContain('2 x 1 = 2');
  });

  test('should create table with custom values', () => {

    const options = {
      base: 3,
      limit: 20
    }

    const createTable = new CreateTable();
    const table = createTable.execute(options);
    expect(createTable).toBeInstanceOf(CreateTable);
    expect(table).toContain('3 x 1 = 3');
    expect(table).toContain('3 x 10 = 30');
    expect(table).toContain('3 x 20 = 60');
  });
});