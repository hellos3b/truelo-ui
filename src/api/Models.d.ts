declare namespace Truelo {
  interface Elo {
    name: string;
    elo: number;
  }

  interface League {
    elos: Elo[]
  }

  interface GroupOverview {
    id: number;
    name: string;
    location: string;
    membersCount: string;
    role: string;
    avatar: string;
    cover: string;
  }
}