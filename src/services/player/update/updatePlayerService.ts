import { Player } from "../../../entities/player";
import { EnumPlayerAttributesRange } from "../../../utils/dicts/enumPlayerAttributesRange";
import { PlayersRepository } from "./../../../repositories/playersRepository";

interface UpdatePlayerRequest {
  playerId: string;
  name: string;
  birthdate: Date;
  lenght: number;
  weight: number;
  jersey: number;
  playerImage?: string;
  positionId: string;
  teamId: string;
  corners: EnumPlayerAttributesRange;
  crossing: EnumPlayerAttributesRange;
  dribbling: EnumPlayerAttributesRange;
  finishing: EnumPlayerAttributesRange;
  firstTouch: EnumPlayerAttributesRange;
  freeKickTaking: EnumPlayerAttributesRange;
  heading: EnumPlayerAttributesRange;
  longShots: EnumPlayerAttributesRange;
  longThrows: EnumPlayerAttributesRange;
  marking: EnumPlayerAttributesRange;
  passing: EnumPlayerAttributesRange;
  penaltyTaking: EnumPlayerAttributesRange;
  tackling: EnumPlayerAttributesRange;
  technique: EnumPlayerAttributesRange;
  agression: EnumPlayerAttributesRange;
  anticipation: EnumPlayerAttributesRange;
  bravery: EnumPlayerAttributesRange;
  composure: EnumPlayerAttributesRange;
  concentration: EnumPlayerAttributesRange;
  decisions: EnumPlayerAttributesRange;
  determination: EnumPlayerAttributesRange;
  flair: EnumPlayerAttributesRange;
  leadership: EnumPlayerAttributesRange;
  offTheBall: EnumPlayerAttributesRange;
  positioning: EnumPlayerAttributesRange;
  teamWork: EnumPlayerAttributesRange;
  vision: EnumPlayerAttributesRange;
  workRate: EnumPlayerAttributesRange;
  acceleration: EnumPlayerAttributesRange;
  agility: EnumPlayerAttributesRange;
  balance: EnumPlayerAttributesRange;
  jumpingReach: EnumPlayerAttributesRange;
  naturalFitness: EnumPlayerAttributesRange;
  pace: EnumPlayerAttributesRange;
  stamina: EnumPlayerAttributesRange;
  strenght: EnumPlayerAttributesRange;
}

type UpdatePlayerResponse = Player;

export class UpdatePlayerService {
  constructor(private playersRepository: PlayersRepository) {}

  async execute({
    playerId,
    name,
    birthdate,
    lenght,
    weight,
    jersey,
    playerImage,
    positionId,
    teamId,
    corners,
    crossing,
    dribbling,
    finishing,
    firstTouch,
    freeKickTaking,
    heading,
    longShots,
    longThrows,
    marking,
    passing,
    penaltyTaking,
    tackling,
    technique,
    agression,
    anticipation,
    bravery,
    composure,
    concentration,
    decisions,
    determination,
    flair,
    leadership,
    offTheBall,
    positioning,
    teamWork,
    vision,
    workRate,
    acceleration,
    agility,
    balance,
    jumpingReach,
    naturalFitness,
    pace,
    stamina,
    strenght,
  }: UpdatePlayerRequest): Promise<UpdatePlayerResponse> {
    const index = await this.playersRepository.findIndex(playerId);

    if (index < 0) throw new Error("Player not found!");

    const player = new Player({
      playerId,
      name,
      birthdate,
      lenght,
      weight,
      jersey,
      playerImage,
      positionId,
      teamId,
      corners,
      crossing,
      dribbling,
      finishing,
      firstTouch,
      freeKickTaking,
      heading,
      longShots,
      longThrows,
      marking,
      passing,
      penaltyTaking,
      tackling,
      technique,
      agression,
      anticipation,
      bravery,
      composure,
      concentration,
      decisions,
      determination,
      flair,
      leadership,
      offTheBall,
      positioning,
      teamWork,
      vision,
      workRate,
      acceleration,
      agility,
      balance,
      jumpingReach,
      naturalFitness,
      pace,
      stamina,
      strenght,
    });

    await this.playersRepository.update(player, index);

    return player;
  }
}