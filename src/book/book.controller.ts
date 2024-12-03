import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from '@prisma/client';

@Controller('api/v1/book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  async getAllBook(): Promise<Book[]> {
    return this.bookService.getAllBook();
  }

  @Get(':id')
  async getBookById(@Param('id') id: number): Promise<Book | null> {
    return this.bookService.getBookById(id);
  }

  @Post()
  async createBook(@Body() data: Book): Promise<Book> {
    return this.bookService.createBook(data);
  }

  @Put(':id')
  async updateBook(@Param('id') id: number, @Body() data: Book): Promise<Book> {
    return this.bookService.updateBook(id, data);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: number): Promise<Book> {
    return this.bookService.deleteBook(id);
  }
}
