package sartorio.mateus.movies.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.util.MultiValueMapAdapter;
import org.springframework.web.bind.annotation.*;
import sartorio.mateus.movies.model.Movie;
import sartorio.mateus.movies.service.MovieService;

import java.util.List;

@RestController
@RequestMapping("api/v1/movies")
public class MovieController {
    @Autowired
    private MovieService movieService;

    @GetMapping
    @CrossOrigin(origins = "*")
    public ResponseEntity<List<Movie>> getAllMovies() {
        return new ResponseEntity<List<Movie>>(movieService.allMovies(), HttpStatus.OK);
    }

    @GetMapping("/{imdbId}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Movie> getMovie(@PathVariable String imdbId) {
        return new ResponseEntity<Movie>(movieService.movieById(imdbId), HttpStatus.OK);
    }
}
