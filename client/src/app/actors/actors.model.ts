export interface ActorCreationDTO {
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
