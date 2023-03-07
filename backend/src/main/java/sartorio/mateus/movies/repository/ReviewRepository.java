package sartorio.mateus.movies.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import sartorio.mateus.movies.model.Review;

public interface ReviewRepository extends MongoRepository<Review, ObjectId> {
}
