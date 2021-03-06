import { UpdateResult, DeleteResult } from 'typeorm';
import Course from '../../entities/Course';
import CourseReview from '../../entities/CourseReview';
import User from '../../entities/User';

export interface IReviewUpdate {
  comment?: string;
  rating?: number;
  hash_user_course?: string;
  course?: Course;
  user?: User;
}

export interface IReview {
  comment: string;
  rating: number;
  hash_user_course: string;
  course: Course;
  user: User;
  user_id?: string;
  course_id?: string;
}

export interface ICourseReviewRepo {
  updateReview: (
    id: string,
    updatedReview: IReviewUpdate
  ) => Promise<UpdateResult>;
  getReviews: (userId: string) => Promise<CourseReview[]>;
  findOneOrFail: (id: string, listRelations: string[]) => Promise<CourseReview>;
  delete: (id: string) => Promise<DeleteResult>;
  saveReview: (courseReview: IReview) => Promise<CourseReview>;
}
