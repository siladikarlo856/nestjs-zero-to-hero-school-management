import { Resolver, Query } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { resolveObjectURL } from 'buffer';

@Resolver((of) => LessonType)
export class LessonResolver {
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: 'asdfasdf',
      name: 'Physics Class',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
