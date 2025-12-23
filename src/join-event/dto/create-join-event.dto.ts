export class CreateJoinEventDto {
  fullName: string;
  phoneNumber: string;
  join: boolean;
  countUser: number;
  event: 'trai' | 'gai';
}
