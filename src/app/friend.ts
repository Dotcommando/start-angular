export class Friend {
  _id: string;
  index: number;
  guid: string;
  isActive: boolean;
  balance: string;
  picture: string;
  age: number;
  eyeColor: string;
  name: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  registered: string;
  latitude: number;
  longitude: number;
  tags: string[];
  friends: FriendOfFrind[];
  greeting: string;
  favoriteFruit: string;
}

export class FriendOfFrind {
  id: number;
  name: string;
}
