// TODO: Separate operations
export type Operations =
  | "find"
  | "findOne"
  | "save"
  | "deleteOne"
  | "deleteMay"
  | "findAndUpdate";

interface DataAccess {
  find: (...args) => Promise<unknown>;
  findOne: (...args) => Promise<unknown>;
  findAndUpdate?: (...args) => Promise<unknown>;
  save?: (...args) => Promise<unknown>;
  deleteOne?: (...args) => Promise<unknown>;
  deleteMany?: (...args) => Promise<unknown>;
}

export abstract class AbstractRepository<T> implements DataAccess {
  private model: T | any;

  constructor(model: T) {
    this.model = model;
  }

  find(...args): Promise<T[]> {
    // other implementations here
    return this.model.find({});
  }

  findOne(filterQuery: any): Promise<T | null> {
    // other implementations here
    return this.model.find({});
  }

  async save(entityData: any): Promise<T | null> {
    return this.model.save(entityData);
  }
}
