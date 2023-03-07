package sartorio.mateus.movies.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sartorio.mateus.movies.model.Movie;
import sartorio.mateus.movies.repository.MovieRepository;

import java.util.List;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> allMovies() {
        return movieRepository.findAll();
    }

    public Movie movieById(String imdbId) {
        return movieRepository.findByImdbId(imdbId).orElse(null);
    }
}
