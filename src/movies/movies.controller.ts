import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService){}

    @Get()
    getAll() :Movie[]{
        return this.moviesService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') movieId:string){
        return this.moviesService.getOne(movieId);
    }

    @Post()         //create
    create(@Body() movieData){
       return this.moviesService.create(movieData);
    }

    @Delete(":id")
    remove(@Param('id') movieId:string){
       return this.moviesService.deleteOne(movieId);
    }

    @Patch(':id')  //update
    patch(@Param('id') movieId: string, @Body() updateData){
        return {
            updatedMovie:movieId,
            ...updateData,
        }; //body를 json으로 리턴. "updatedMovie":"12"
    }


}
