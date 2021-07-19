export interface ActorCreationDTO {
  id: number;
  name: string;
  dateOfBirth: Date;
  picture: string;
  bio?: string;
}

export interface ActorDTO {
  id: number;
  name: string;
  dateOfBirth: Date;
  picture: string;
  bio?: string;
}

export interface actorsMovieDTO {
  id: number;
  name: string;
  character: string;
  picture: string;
}
