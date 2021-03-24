import { Injectable } from '@nestjs/common';
import { Document, Model, Types } from 'mongoose';

@Injectable()
export class CrudService<U extends Document> {
  constructor(protected model: Model<U>) {
  }

  // Create
  async create<T>(data: T, lean: boolean = false): Promise<U> {
    return this.model.create(data)
  }

  async createMultiple(data: any[]): Promise<U[]> {
    return this.model.insertMany(data);
  }

  // Read
  async findById(id: Types.ObjectId, lean: boolean = true, findDeleted: boolean = false): Promise<U> {
    if (!id) {
      return null;
    }
    return this.model.findById(id)
  }

  async findByIds(ids: any[], lean: boolean = true): Promise<U[]> {
    if (!ids || ids.length === 0) {
      return [];
    }
    //@ts-ignore
    return this.model.find({_id: {'$in': ids}});
  }

  async findMany(filters: any = {}, lean: boolean = true): Promise<U[]> {
    return this.model.find(filters, null, {lean});
  }

  async findOne(filters: any = {}, lean: boolean = true): Promise<U> {
    return this.model.findOne(filters, null, {lean});
  }

  // Update
  async updateById(id: Types.ObjectId, data: any, upsert = false): Promise<U> {
    return this.model.findByIdAndUpdate(id, data, {new: true, upsert}).lean();
  }

  async updateOne(filters: any, data: any): Promise<U> {
    return this.model.findOneAndUpdate(filters, data, {new: true}).lean();
  }

  async updateMany(filters: any = {}, data: any, lean: boolean = true): Promise<U[]> {
    //@ts-ignore
    return this.model.updateMany(filters, data);
  }

  // Delete
  async delete(id: Types.ObjectId) {
    return this.model.findByIdAndDelete(id).lean();
  }

  async deleteMany(filters = {}): Promise<{ok?: number, n?: number}> {
    return this.model.deleteMany(filters);
  }
}
