import { Controller, Get, Param, Post, Body, Query, Delete, UseGuards } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiParam } from '@nestjs/swagger';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) { }
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get()
    async getBooks() {
        const books = await this.booksService.getBooks();
        return books;
    }

    @ApiBearerAuth()
    @ApiParam({
        name: 'bookID',
        type: 'number'
    })
    @UseGuards(JwtAuthGuard)
    @Get(':bookID')
    async getBook(@Param('bookID') bookID) {
        const book = await this.booksService.getBook(bookID);
        return book;
    }
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post()
    async addBook(@Body() createBookDTO: CreateBookDTO) {
        const book = await this.booksService.addBook(createBookDTO);
        return book;
    }
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Delete()
    async deleteBook(@Query() query) {
        const books = await this.booksService.deleteBook(query.bookID);
        return books;
    }
}