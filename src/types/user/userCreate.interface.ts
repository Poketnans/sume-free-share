import Image from '../../entities/Image';

export interface IUser {
  id: string;
  name: string;
  password: string;
  email: string;
  employed: boolean;
  createdAt: Date;
  updatedAt: Date;
  image?: Image;
}
