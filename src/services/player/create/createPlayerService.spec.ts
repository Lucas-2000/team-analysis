import { InMemoryPlayersRepository } from "./../../../repositories/inMemory/inMemoryPlayersRepository";
import { describe, expect, it } from "vitest";
import { CreatePlayerService } from "./createPlayerService";
import { EnumPlayerAttributesRange } from "../../../utils/dicts/enumPlayerAttributesRange";
import { InMemoryTeamsRepository } from "../../../repositories/inMemory/inMemoryTeamsRepository";
import { InMemoryPositionsRepository } from "../../../repositories/inMemory/inMemoryPositionsRepository";
import { CreateTeamService } from "../../team/create/createTeamService";
import {
  EnumPlayerPositionBase,
  EnumPlayerPositionRole,
  EnumRoleType,
  EnumTeamGrade,
} from "@prisma/client";
import { CreatePositionService } from "../../position/create/createPositionService";

describe("Create Player Service", () => {
  it("should be able to create a new player", async () => {
    const playersRepository = new InMemoryPlayersRepository();
    const teamsRepository = new InMemoryTeamsRepository();
    const positionsRepository = new InMemoryPositionsRepository();
    const createPlayer = new CreatePlayerService(
      playersRepository,
      teamsRepository,
      positionsRepository
    );
    const createTeam = new CreateTeamService(teamsRepository);
    const createPositionService = new CreatePositionService(
      positionsRepository
    );

    await createPositionService.execute({
      id: "1",
      basePosition: EnumPlayerPositionBase.Midfielder,
      positionRole: EnumPlayerPositionRole.AttackingMidfielder,
      roleType: [EnumRoleType.Attack, EnumRoleType.Support],
    });

    await createTeam.execute({
      id: "1",
      teamName: "Corinthians",
      teamLocalization: "SP",
      teamCountry: "Brasil",
      teamLeague: "Brasileirão",
      teamGrade: EnumTeamGrade.A,
      teamLogo: "exemplo",
    });

    await expect(
      createPlayer.execute({
        id: "1",
        name: "Kevin de Bruyne",
        birthdate: "1991-08-01",
        lenght: 181,
        weight: 68,
        jersey: 17,
        positionId: "1",
        teamId: "1",
        corners: EnumPlayerAttributesRange.Fifteen,
        crossing: EnumPlayerAttributesRange.Fifteen,
        dribbling: EnumPlayerAttributesRange.Fifteen,
        finishing: EnumPlayerAttributesRange.Fifteen,
        firstTouch: EnumPlayerAttributesRange.Fifteen,
        freeKickTaking: EnumPlayerAttributesRange.Fifteen,
        heading: EnumPlayerAttributesRange.Fifteen,
        longShots: EnumPlayerAttributesRange.Fifteen,
        longThrows: EnumPlayerAttributesRange.Fifteen,
        marking: EnumPlayerAttributesRange.Fifteen,
        passing: EnumPlayerAttributesRange.Fifteen,
        penaltyTaking: EnumPlayerAttributesRange.Fifteen,
        tackling: EnumPlayerAttributesRange.Fifteen,
        technique: EnumPlayerAttributesRange.Fifteen,
        agression: EnumPlayerAttributesRange.Fifteen,
        anticipation: EnumPlayerAttributesRange.Fifteen,
        bravery: EnumPlayerAttributesRange.Fifteen,
        composure: EnumPlayerAttributesRange.Fifteen,
        concentration: EnumPlayerAttributesRange.Fifteen,
        decisions: EnumPlayerAttributesRange.Fifteen,
        determination: EnumPlayerAttributesRange.Fifteen,
        flair: EnumPlayerAttributesRange.Fifteen,
        leadership: EnumPlayerAttributesRange.Fifteen,
        offTheBall: EnumPlayerAttributesRange.Fifteen,
        positioning: EnumPlayerAttributesRange.Fifteen,
        teamWork: EnumPlayerAttributesRange.Fifteen,
        vision: EnumPlayerAttributesRange.Fifteen,
        workRate: EnumPlayerAttributesRange.Fifteen,
        acceleration: EnumPlayerAttributesRange.Fifteen,
        agility: EnumPlayerAttributesRange.Fifteen,
        balance: EnumPlayerAttributesRange.Fifteen,
        jumpingReach: EnumPlayerAttributesRange.Fifteen,
        naturalFitness: EnumPlayerAttributesRange.Fifteen,
        pace: EnumPlayerAttributesRange.Fifteen,
        stamina: EnumPlayerAttributesRange.Fifteen,
        strenght: EnumPlayerAttributesRange.Fifteen,
      })
    ).resolves.toHaveProperty("id");
  });

  it("should not be able to create a new player if player already exists", async () => {
    const playersRepository = new InMemoryPlayersRepository();
    const teamsRepository = new InMemoryTeamsRepository();
    const positionsRepository = new InMemoryPositionsRepository();
    const createPlayer = new CreatePlayerService(
      playersRepository,
      teamsRepository,
      positionsRepository
    );
    const createTeam = new CreateTeamService(teamsRepository);
    const createPositionService = new CreatePositionService(
      positionsRepository
    );

    await createPositionService.execute({
      id: "1",
      basePosition: EnumPlayerPositionBase.Midfielder,
      positionRole: EnumPlayerPositionRole.AttackingMidfielder,
      roleType: [EnumRoleType.Attack, EnumRoleType.Support],
    });

    await createTeam.execute({
      id: "1",
      teamName: "Corinthians",
      teamLocalization: "SP",
      teamCountry: "Brasil",
      teamLeague: "Brasileirão",
      teamGrade: EnumTeamGrade.A,
      teamLogo: "exemplo",
    });

    await createPlayer.execute({
      id: "1",
      name: "Kevin de Bruyne",
      birthdate: "1991-08-01",
      lenght: 181,
      weight: 68,
      jersey: 17,
      positionId: "1",
      teamId: "1",
      corners: EnumPlayerAttributesRange.Fifteen,
      crossing: EnumPlayerAttributesRange.Fifteen,
      dribbling: EnumPlayerAttributesRange.Fifteen,
      finishing: EnumPlayerAttributesRange.Fifteen,
      firstTouch: EnumPlayerAttributesRange.Fifteen,
      freeKickTaking: EnumPlayerAttributesRange.Fifteen,
      heading: EnumPlayerAttributesRange.Fifteen,
      longShots: EnumPlayerAttributesRange.Fifteen,
      longThrows: EnumPlayerAttributesRange.Fifteen,
      marking: EnumPlayerAttributesRange.Fifteen,
      passing: EnumPlayerAttributesRange.Fifteen,
      penaltyTaking: EnumPlayerAttributesRange.Fifteen,
      tackling: EnumPlayerAttributesRange.Fifteen,
      technique: EnumPlayerAttributesRange.Fifteen,
      agression: EnumPlayerAttributesRange.Fifteen,
      anticipation: EnumPlayerAttributesRange.Fifteen,
      bravery: EnumPlayerAttributesRange.Fifteen,
      composure: EnumPlayerAttributesRange.Fifteen,
      concentration: EnumPlayerAttributesRange.Fifteen,
      decisions: EnumPlayerAttributesRange.Fifteen,
      determination: EnumPlayerAttributesRange.Fifteen,
      flair: EnumPlayerAttributesRange.Fifteen,
      leadership: EnumPlayerAttributesRange.Fifteen,
      offTheBall: EnumPlayerAttributesRange.Fifteen,
      positioning: EnumPlayerAttributesRange.Fifteen,
      teamWork: EnumPlayerAttributesRange.Fifteen,
      vision: EnumPlayerAttributesRange.Fifteen,
      workRate: EnumPlayerAttributesRange.Fifteen,
      acceleration: EnumPlayerAttributesRange.Fifteen,
      agility: EnumPlayerAttributesRange.Fifteen,
      balance: EnumPlayerAttributesRange.Fifteen,
      jumpingReach: EnumPlayerAttributesRange.Fifteen,
      naturalFitness: EnumPlayerAttributesRange.Fifteen,
      pace: EnumPlayerAttributesRange.Fifteen,
      stamina: EnumPlayerAttributesRange.Fifteen,
      strenght: EnumPlayerAttributesRange.Fifteen,
    });

    await expect(
      createPlayer.execute({
        id: "1",
        name: "Kevin de Bruyne",
        birthdate: "1991-08-01",
        lenght: 181,
        weight: 68,
        jersey: 17,
        positionId: "1",
        teamId: "1",
        corners: EnumPlayerAttributesRange.Fifteen,
        crossing: EnumPlayerAttributesRange.Fifteen,
        dribbling: EnumPlayerAttributesRange.Fifteen,
        finishing: EnumPlayerAttributesRange.Fifteen,
        firstTouch: EnumPlayerAttributesRange.Fifteen,
        freeKickTaking: EnumPlayerAttributesRange.Fifteen,
        heading: EnumPlayerAttributesRange.Fifteen,
        longShots: EnumPlayerAttributesRange.Fifteen,
        longThrows: EnumPlayerAttributesRange.Fifteen,
        marking: EnumPlayerAttributesRange.Fifteen,
        passing: EnumPlayerAttributesRange.Fifteen,
        penaltyTaking: EnumPlayerAttributesRange.Fifteen,
        tackling: EnumPlayerAttributesRange.Fifteen,
        technique: EnumPlayerAttributesRange.Fifteen,
        agression: EnumPlayerAttributesRange.Fifteen,
        anticipation: EnumPlayerAttributesRange.Fifteen,
        bravery: EnumPlayerAttributesRange.Fifteen,
        composure: EnumPlayerAttributesRange.Fifteen,
        concentration: EnumPlayerAttributesRange.Fifteen,
        decisions: EnumPlayerAttributesRange.Fifteen,
        determination: EnumPlayerAttributesRange.Fifteen,
        flair: EnumPlayerAttributesRange.Fifteen,
        leadership: EnumPlayerAttributesRange.Fifteen,
        offTheBall: EnumPlayerAttributesRange.Fifteen,
        positioning: EnumPlayerAttributesRange.Fifteen,
        teamWork: EnumPlayerAttributesRange.Fifteen,
        vision: EnumPlayerAttributesRange.Fifteen,
        workRate: EnumPlayerAttributesRange.Fifteen,
        acceleration: EnumPlayerAttributesRange.Fifteen,
        agility: EnumPlayerAttributesRange.Fifteen,
        balance: EnumPlayerAttributesRange.Fifteen,
        jumpingReach: EnumPlayerAttributesRange.Fifteen,
        naturalFitness: EnumPlayerAttributesRange.Fifteen,
        pace: EnumPlayerAttributesRange.Fifteen,
        stamina: EnumPlayerAttributesRange.Fifteen,
        strenght: EnumPlayerAttributesRange.Fifteen,
      })
    ).rejects.toBeInstanceOf(Error);
  });

  it("should not be able to create a new player if position don't exists", async () => {
    const playersRepository = new InMemoryPlayersRepository();
    const teamsRepository = new InMemoryTeamsRepository();
    const positionsRepository = new InMemoryPositionsRepository();
    const createPlayer = new CreatePlayerService(
      playersRepository,
      teamsRepository,
      positionsRepository
    );
    const createTeam = new CreateTeamService(teamsRepository);
    const createPositionService = new CreatePositionService(
      positionsRepository
    );

    await createPositionService.execute({
      id: "1",
      basePosition: EnumPlayerPositionBase.Midfielder,
      positionRole: EnumPlayerPositionRole.AttackingMidfielder,
      roleType: [EnumRoleType.Attack, EnumRoleType.Support],
    });

    await createTeam.execute({
      id: "1",
      teamName: "Corinthians",
      teamLocalization: "SP",
      teamCountry: "Brasil",
      teamLeague: "Brasileirão",
      teamGrade: EnumTeamGrade.A,
      teamLogo: "exemplo",
    });

    await expect(
      createPlayer.execute({
        id: "1",
        name: "Kevin de Bruyne",
        birthdate: "1991-08-01",
        lenght: 181,
        weight: 68,
        jersey: 17,
        positionId: "2",
        teamId: "1",
        corners: EnumPlayerAttributesRange.Fifteen,
        crossing: EnumPlayerAttributesRange.Fifteen,
        dribbling: EnumPlayerAttributesRange.Fifteen,
        finishing: EnumPlayerAttributesRange.Fifteen,
        firstTouch: EnumPlayerAttributesRange.Fifteen,
        freeKickTaking: EnumPlayerAttributesRange.Fifteen,
        heading: EnumPlayerAttributesRange.Fifteen,
        longShots: EnumPlayerAttributesRange.Fifteen,
        longThrows: EnumPlayerAttributesRange.Fifteen,
        marking: EnumPlayerAttributesRange.Fifteen,
        passing: EnumPlayerAttributesRange.Fifteen,
        penaltyTaking: EnumPlayerAttributesRange.Fifteen,
        tackling: EnumPlayerAttributesRange.Fifteen,
        technique: EnumPlayerAttributesRange.Fifteen,
        agression: EnumPlayerAttributesRange.Fifteen,
        anticipation: EnumPlayerAttributesRange.Fifteen,
        bravery: EnumPlayerAttributesRange.Fifteen,
        composure: EnumPlayerAttributesRange.Fifteen,
        concentration: EnumPlayerAttributesRange.Fifteen,
        decisions: EnumPlayerAttributesRange.Fifteen,
        determination: EnumPlayerAttributesRange.Fifteen,
        flair: EnumPlayerAttributesRange.Fifteen,
        leadership: EnumPlayerAttributesRange.Fifteen,
        offTheBall: EnumPlayerAttributesRange.Fifteen,
        positioning: EnumPlayerAttributesRange.Fifteen,
        teamWork: EnumPlayerAttributesRange.Fifteen,
        vision: EnumPlayerAttributesRange.Fifteen,
        workRate: EnumPlayerAttributesRange.Fifteen,
        acceleration: EnumPlayerAttributesRange.Fifteen,
        agility: EnumPlayerAttributesRange.Fifteen,
        balance: EnumPlayerAttributesRange.Fifteen,
        jumpingReach: EnumPlayerAttributesRange.Fifteen,
        naturalFitness: EnumPlayerAttributesRange.Fifteen,
        pace: EnumPlayerAttributesRange.Fifteen,
        stamina: EnumPlayerAttributesRange.Fifteen,
        strenght: EnumPlayerAttributesRange.Fifteen,
      })
    ).rejects.toBeInstanceOf(Error);
  });

  it("should not be able to create a new player if team don't exists", async () => {
    const playersRepository = new InMemoryPlayersRepository();
    const teamsRepository = new InMemoryTeamsRepository();
    const positionsRepository = new InMemoryPositionsRepository();
    const createPlayer = new CreatePlayerService(
      playersRepository,
      teamsRepository,
      positionsRepository
    );
    const createTeam = new CreateTeamService(teamsRepository);
    const createPositionService = new CreatePositionService(
      positionsRepository
    );

    await createPositionService.execute({
      id: "1",
      basePosition: EnumPlayerPositionBase.Midfielder,
      positionRole: EnumPlayerPositionRole.AttackingMidfielder,
      roleType: [EnumRoleType.Attack, EnumRoleType.Support],
    });

    await createTeam.execute({
      id: "1",
      teamName: "Corinthians",
      teamLocalization: "SP",
      teamCountry: "Brasil",
      teamLeague: "Brasileirão",
      teamGrade: EnumTeamGrade.A,
      teamLogo: "exemplo",
    });

    await expect(
      createPlayer.execute({
        id: "1",
        name: "Kevin de Bruyne",
        birthdate: "1991-08-01",
        lenght: 181,
        weight: 68,
        jersey: 17,
        positionId: "1",
        teamId: "2",
        corners: EnumPlayerAttributesRange.Fifteen,
        crossing: EnumPlayerAttributesRange.Fifteen,
        dribbling: EnumPlayerAttributesRange.Fifteen,
        finishing: EnumPlayerAttributesRange.Fifteen,
        firstTouch: EnumPlayerAttributesRange.Fifteen,
        freeKickTaking: EnumPlayerAttributesRange.Fifteen,
        heading: EnumPlayerAttributesRange.Fifteen,
        longShots: EnumPlayerAttributesRange.Fifteen,
        longThrows: EnumPlayerAttributesRange.Fifteen,
        marking: EnumPlayerAttributesRange.Fifteen,
        passing: EnumPlayerAttributesRange.Fifteen,
        penaltyTaking: EnumPlayerAttributesRange.Fifteen,
        tackling: EnumPlayerAttributesRange.Fifteen,
        technique: EnumPlayerAttributesRange.Fifteen,
        agression: EnumPlayerAttributesRange.Fifteen,
        anticipation: EnumPlayerAttributesRange.Fifteen,
        bravery: EnumPlayerAttributesRange.Fifteen,
        composure: EnumPlayerAttributesRange.Fifteen,
        concentration: EnumPlayerAttributesRange.Fifteen,
        decisions: EnumPlayerAttributesRange.Fifteen,
        determination: EnumPlayerAttributesRange.Fifteen,
        flair: EnumPlayerAttributesRange.Fifteen,
        leadership: EnumPlayerAttributesRange.Fifteen,
        offTheBall: EnumPlayerAttributesRange.Fifteen,
        positioning: EnumPlayerAttributesRange.Fifteen,
        teamWork: EnumPlayerAttributesRange.Fifteen,
        vision: EnumPlayerAttributesRange.Fifteen,
        workRate: EnumPlayerAttributesRange.Fifteen,
        acceleration: EnumPlayerAttributesRange.Fifteen,
        agility: EnumPlayerAttributesRange.Fifteen,
        balance: EnumPlayerAttributesRange.Fifteen,
        jumpingReach: EnumPlayerAttributesRange.Fifteen,
        naturalFitness: EnumPlayerAttributesRange.Fifteen,
        pace: EnumPlayerAttributesRange.Fifteen,
        stamina: EnumPlayerAttributesRange.Fifteen,
        strenght: EnumPlayerAttributesRange.Fifteen,
      })
    ).rejects.toBeInstanceOf(Error);
  });
});
