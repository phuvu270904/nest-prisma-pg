import { Injectable } from '@nestjs/common';
import { Book } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async getAllBook(): Promise<Book[]> {
    return this.prisma.book.findMany();
  }

  async getBookById(id: number): Promise<Book | null> {
    return this.prisma.book.findUnique({
      where: { id: Number(id) },
    });
  }

  async createBook(data: Book): Promise<Book> {
    return this.prisma.book.create({ data });
  }

  async updateBook(id: number, data: Book): Promise<Book> {
    return this.prisma.book.update({
      where: { id: Number(id) },
      data,
    });
  }

  async deleteBook(id: number): Promise<Book> {
    return this.prisma.book.delete({
      where: { id: Number(id) },
    });
  }
}
