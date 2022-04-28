import { getRepository, Repository } from 'typeorm';
import CourseReview from '../../entities/CourseReview';
import { ICourseReviewRepo, IReview, IReviewUpdate } from './interfaces';

class CourseReviewRepository implements ICourseReviewRepo {
  private ormRepository: Repository<CourseReview>;

  constructor() {
    this.ormRepository = getRepository(CourseReview);
  }

  saveReview = (courseReview: IReview) => this.ormRepository.save(courseReview);
  
  delete = (id: string) => this.ormRepository.delete(id);

  updateReview = (id: string, updatedReview : IReviewUpdate) => this.ormRepository.update(id,updatedReview);

  findOneOrFail = (id: string, listRelations: string[] =[]) => this.ormRepository.findOneOrFail(id,{relations:listRelations})


}

export default CourseReviewRepository;
