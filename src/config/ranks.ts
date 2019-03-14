export enum RankGroup {
  "Bronze", "Silver", "Gold", "Platinum", "Diamond", "Champion", "GrandChampion"
}
interface Rank {
  group: RankGroup;
  division: (1 | 2 | 3);
  maxElo: number;
}

export const ranks: Rank[] = [
  { group: RankGroup.Bronze, division: 1, maxElo: 20 },
  { group: RankGroup.Bronze, division: 2, maxElo: 40 },
  { group: RankGroup.Bronze, division: 3, maxElo: 60 },
  { group: RankGroup.Silver, division: 1, maxElo: 80 },
  { group: RankGroup.Silver, division: 2, maxElo: 100 },
  { group: RankGroup.Silver, division: 3, maxElo: 120 },
  { group: RankGroup.Gold, division: 1, maxElo: 140 },
  { group: RankGroup.Gold, division: 2, maxElo: 160 },
  { group: RankGroup.Gold, division: 3, maxElo: 180 },
  { group: RankGroup.Platinum, division: 1, maxElo: 200 },
  { group: RankGroup.Platinum, division: 2, maxElo: 220 },
  { group: RankGroup.Platinum, division: 3, maxElo: 240 },
  { group: RankGroup.Diamond, division: 1, maxElo: 250 },
  { group: RankGroup.Diamond, division: 2, maxElo: 260 },
  { group: RankGroup.Diamond, division: 3, maxElo: 270 },
  { group: RankGroup.Champion, division: 1, maxElo: 300 },
  { group: RankGroup.GrandChampion, division: 1, maxElo: 340 }
]

export const getRankByElo = (elo: number) => {
  for (var i = 0; i < ranks.length; i++) {
    if (elo < ranks[i].maxElo) return ranks[i]
  }
  return ranks[ranks.length - 1]
}