import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return 'This will return all movies'
    }

    @Get('/:id')
    getOne(@Param('id') movieId:string){
        return `This will return one movie with the id: ${movieId}`
    }

    @Post()         //create
    create(){
        return 'This will create a movie';
    }

    @Delete("/:id")
    remove(@Param('id') movieId:string){
        return `This will delete a movie with the id: ${movieId}`;
    }

    @Patch('/:id')  //update
    patch(@Param('id') movieId: string){
        return `This will patch a movie with the id: ${movieId}`;
    }

}
